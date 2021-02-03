import React, { useContext } from 'react'

import { IManagementOptions } from 'models'
import { v4 as uuid } from 'uuid'

import { Toggle } from '../../components/Toggle'
import { ManagementContext } from '../../context/ManagementContext'

interface Props {
  title: string
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const { state, toggleManagementVisible } = useContext(ManagementContext)

  const handleToggle = (id: string) => {
    toggleManagementVisible(id)
  }

  return (
    <div className="h-screen flex bg-gray-100">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <h1 className="flex items-center flex-shrink-0 px-4 text-white text-2xl font-medium">
              {title}
            </h1>
            <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1" aria-label="Sidebar">
              <a
                href="/options.html"
                className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-cyan-600"
              >
                <svg
                  className="mr-4 h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
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
                Settings
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="p-10 w-screen">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

        <div className="mt-8 max-w-3xl lg:max-w-3xl">
          <section aria-labelledby="tab-management-title">
            <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                  <h2 id="tab-management-title" className="text-lg font-medium text-gray-900">
                    Extension options
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Personalize your extension enabling or disabling visually the following options
                  </p>
                </div>
                <div className="px-4 py-6 sm:px-6">
                  <ul className="space-y-2 flex flex-col">
                    {state.options?.map((currentOption: IManagementOptions) => (
                      <li key={uuid()} className="flex">
                        <p className="text-base">{currentOption.name}</p>
                        <Toggle
                          handleToggle={handleToggle}
                          id={currentOption.id}
                          active={currentOption.visible}
                          className="ml-auto"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Options
