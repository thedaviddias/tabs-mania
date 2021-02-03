import React, { Suspense, lazy } from 'react'

import { ErrorBoundary } from 'react-error-boundary'

import { closePopover } from '../utils'
import { Alert } from './Alert'
import { ErrorFallback } from './ErrorFallback'

const TabManagement = lazy(() => import('./TabManagement'))

export const Header = ({ resetStatus }: any) => {
  return (
    <header>
      <div className="pt-4 px-4 mb-4">
        <h1 className="font-semibold text-xl mb-3">Tabs Mania</h1>
        {resetStatus && <Alert>Your options have been reset</Alert>}
      </div>

      <div className="block">
        <div className="border-b border-gray-200">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="bg-indigo-50 p-4">
              <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => closePopover()}>
                <TabManagement />
              </ErrorBoundary>
            </div>
          </Suspense>
        </div>
      </div>
    </header>
  )
}
