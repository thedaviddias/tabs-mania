import { useEffect, useState, useCallback } from 'react'

import { IManagementOptions } from 'models'

import { STORAGE_MANAGEMENT_OPTIONS } from '../constants'
import { initialManagement } from '../data/management'

export const useManagementList = (): {
  managementData: IManagementOptions[] | null
  handleVisibleOption: (id: string) => void
} => {
  const [managementData, setOptionsData] = useState<IManagementOptions[] | null>(null)

  const setLocalStorage = useCallback((optionsToSave: IManagementOptions[]) => {
    chrome.storage.local.set({ managementData: optionsToSave }, () => {
      if (chrome.runtime.lastError) {
        console.log('Runtime error.')
      }
      setOptionsData(optionsToSave)
    })
  }, [])

  useEffect(() => {
    chrome.storage.local.get(STORAGE_MANAGEMENT_OPTIONS, (items) => {
      if (chrome.runtime.lastError) {
        console.log(items)
      }
      if (items.managementData === undefined) {
        setLocalStorage(initialManagement)
      } else {
        setOptionsData(items.managementData)
      }
    })
  }, [setLocalStorage])

  const handleVisibleOption = (id: string) => {
    const option = managementData?.map((option, i) => {
      if (`${i}` === id) return { ...option, visible: !option.visible }

      return option
    })

    managementData && option && setLocalStorage([...option])
  }

  return {
    managementData,
    handleVisibleOption,
  }
}
