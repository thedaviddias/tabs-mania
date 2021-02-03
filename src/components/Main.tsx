import React, { useState } from 'react'

import { closePopover } from '../utils'
import { Footer } from './Footer'
import { Header } from './Header'

const Main: React.FC = () => {
  const [resetStatus, setResetStatus] = useState(false)

  const clearLocalStorage = () => {
    chrome.storage.local.clear(function () {
      const error = chrome.runtime.lastError
      if (error) {
        console.error(error)
      } else {
        setResetStatus(true)
        setTimeout(() => {
          closePopover()
        }, 3000)
      }
    })
  }

  return (
    <section className="flex flex-col">
      <Header resetStatus={resetStatus} />

      <Footer clearLocalStorage={clearLocalStorage} />
    </section>
  )
}

export default Main
