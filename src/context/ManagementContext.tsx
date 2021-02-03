import React, { createContext, useReducer, useEffect } from 'react'

import { IManagementOptions } from 'models'

import { useManagementList } from '../hooks/useManagementList'

interface IManagementContext {
  state: {
    options: IManagementOptions[]
  }
  toggleManagementVisible: (id: string) => void
}

export const initialState = {
  state: {
    options: [
      {
        id: '',
        name: '',
        title: '',
        type: '',
        action: '',
        visible: false,
      },
    ],
  },
  toggleManagementVisible: () => true,
}

const ACTION_TYPES = {
  SET_INIT_OPTIONS: 'initOptions',
  TOGGLE_ACTIVE: 'updateActive',
  TOGGLE_VISIBLE: 'updateVisible',
}

export const ManagementContext = createContext<IManagementContext>(initialState)

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SET_INIT_OPTIONS:
      return { ...state, ...{ options: action.payload.options } }
    case ACTION_TYPES.TOGGLE_ACTIVE:
      return {
        ...state,
        ...{
          options: state.options.map((option: any, i: string) => {
            if (`${i}` === action.payload.field.id)
              return { ...option, active: !action.payload.field.active }

            return option
          }),
        },
      }
    case ACTION_TYPES.TOGGLE_VISIBLE:
      return {
        ...state,
        ...{
          options: state.options.map((option: any, i: string) => {
            if (`${action.payload.id}` === `${option.id}`)
              return { ...option, visible: !option.visible }

            return option
          }),
        },
      }
    default:
      return state
  }
}

export const ManagementProvider: React.FC = ({ children }) => {
  const { managementData, handleVisibleOption } = useManagementList()
  const [state, dispatch] = useReducer(reducer, initialState, undefined)

  useEffect(() => {
    if (managementData?.length) {
      dispatch({ type: 'initOptions', payload: { options: managementData } })
    }
  }, [managementData])

  const toggleManagementVisible = (id: string) => {
    handleVisibleOption(id)
    dispatch({ type: 'updateVisible', payload: { options: managementData, id } })
  }

  return (
    <ManagementContext.Provider value={{ state, toggleManagementVisible }}>
      {children}
    </ManagementContext.Provider>
  )
}
