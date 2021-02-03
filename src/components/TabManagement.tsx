import React, { useContext } from 'react'

import { IManagementOptions } from 'models'
import { v4 as uuid } from 'uuid'

import { ManagementContext } from '../context/ManagementContext'
import { closePopover } from '../utils'
import { Button } from './Button'

const TabManagement: React.FC = () => {
  const { state } = useContext(ManagementContext)

  const getProp = (obj: chrome.tabs.Tab, property: string) => {
    switch (property) {
      case 'title':
        return obj?.title?.toLowerCase() || ''

      case 'url':
        return obj?.url?.toLowerCase() || ''

      case 'domain':
        if (obj.url && obj.url.toLowerCase().indexOf('http') > -1) {
          const link = document.createElement('a')
          link.href = obj.url
          const hostname = link.hostname
          const hostnameArray = hostname.split('.')
          const numberOfSubdomains = hostnameArray.length - 2
          return hostnameArray.length === 2
            ? hostname
            : hostnameArray.slice(numberOfSubdomains).join('.')
        } else {
          return ''
        }

      default:
        return obj?.title?.toLowerCase() || ''
    }
  }

  const sortBy = (property: string) => {
    chrome.windows.getCurrent((window) => {
      chrome.tabs.query({ windowId: window.id }, (tabs: chrome.tabs.Tab[]) => {
        if (tabs.length > 0) {
          const tabsNewOrder: number[] = tabs
            .sort((a, b) => (getProp(a, property) > getProp(b, property) ? 1 : -1))
            .map((tab) => (tab.id === undefined ? 0 : tab.id))

          chrome.tabs.move(tabsNewOrder, { index: 0 }, () => {
            closePopover()
          })
        }
      })
    })
  }

  const mergeAllWindows = () => {
    chrome.windows.getCurrent((window) => {
      chrome.tabs.query({ currentWindow: false }, (tabs: chrome.tabs.Tab[]) => {
        if (tabs.length > 0) {
          const tabsNewOrder: number[] = tabs.map((tab) => (tab.id === undefined ? 0 : tab.id))
          chrome.tabs.move(tabsNewOrder, { index: -1, windowId: window.id }, () => {
            closePopover()
          })
        } else {
          closePopover()
        }
      })
    })
  }

  const moveToNewWindow = () => {
    chrome.windows.getCurrent((window) => {
      chrome.tabs.query({ windowId: window.id }, (tabs: chrome.tabs.Tab[]) => {
        if (tabs.length < 2) {
          closePopover()
          return
        }
        tabs.map((tab) => {
          if (!tab.active) return
          chrome.windows.create({ focused: true, tabId: tab.id }, () => {
            closePopover()
          })
        })
      })
    })
  }

  const closeAudibleTabs = () => {
    chrome.windows.getCurrent((window) => {
      chrome.tabs.query({ windowId: window.id }, (tabs: chrome.tabs.Tab[]) => {
        tabs.map((tab) => {
          if (tab.audible || tab.mutedInfo?.muted) {
            tab.id && chrome.tabs.remove(tab.id)
          }
        })
      })
    })
  }

  const sortByTitle = () => {
    sortBy('title')
  }

  const sortByWebsite = () => {
    sortBy('url')
  }

  const sortByDomain = () => {
    sortBy('domain')
  }

  const chooseTypeAction = (name: string) => {
    switch (name) {
      case 'sortByTitle':
        return sortByTitle()
      case 'sortByWebsite':
        return sortByWebsite()
      case 'sortByDomain':
        return sortByDomain()
      case 'mergeAllWindows':
        return mergeAllWindows()
      case 'moveToNew':
        return moveToNewWindow()
      case 'closeAudibleTabs':
        return closeAudibleTabs()
      default:
        break
    }
  }

  return (
    <>
      {state?.options?.map((currentOption: IManagementOptions) => (
        <div key={uuid()}>
          {currentOption.visible && (
            <Button
              action={() => currentOption.action && chooseTypeAction(currentOption.action)}
              field={currentOption}
            />
          )}
        </div>
      ))}
    </>
  )
}

export default TabManagement
