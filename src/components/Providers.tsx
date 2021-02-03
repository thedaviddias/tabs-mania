import React from 'react'

import { ManagementProvider } from '../context/ManagementContext'

export const Providers: React.FC = ({ children }) => {
  return <ManagementProvider>{children}</ManagementProvider>
}
