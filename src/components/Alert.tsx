import React from 'react'

export const Alert: React.FC = ({ children }) => {
  return (
    <div className="rounded-md bg-green-50 p-2">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-4 w-4 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-xs font-medium text-green-800">{children}</p>
        </div>
      </div>
    </div>
  )
}
