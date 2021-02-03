import React from 'react'

import { IManagementOptions } from 'models'

import { getColourFromString } from '../utils/getColourFromString'

interface IButtonProps {
  field: IManagementOptions
  action: () => void
}

export const Button: React.FC<IButtonProps> = ({ field, action }) => {
  return (
    <button
      style={{ borderColor: getColourFromString(field.name) }}
      className={`w-full px-2.5 py-1.5 mb-2 shadow-md bg-white border border-l-8 border-transparent rounded hover:bg-gray-50 hover:shadow-none`}
      onClick={() => action()}
      title={field.title}
    >
      <div className="text-left">
        <p className="text-sm font-medium">{field.name}</p>
        <p className="text-xs font-light">{field.title}</p>
      </div>
    </button>
  )
}
