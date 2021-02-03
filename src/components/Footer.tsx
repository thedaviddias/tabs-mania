import React from 'react'

import { CHROME_EXTENSION_URL } from '../constants'

interface IFooter {
  clearLocalStorage: () => void
}

export const Footer: React.FC<IFooter> = ({ clearLocalStorage }) => {
  return (
    <>
      <hr className="border-indigo-200" />
      <footer>
        <div className="flex">
          <div className="flex ml-auto">
            <button
              type="button"
              onClick={() => clearLocalStorage()}
              className="px-2.5 py-1.5"
              title="Reset personalization"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
            <a
              href={CHROME_EXTENSION_URL}
              className="px-2.5 py-1.5"
              rel="noreferrer"
              target="_blank"
              title="Open Settings Page"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
