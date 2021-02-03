interface IShortcuts {
  default: string
  windows: string
  mac: string
}

export interface IInitialOptions {
  id: string
  name: string
  shortcuts?: IShortcuts
  type: string
  action: string
  active: boolean
  visible: boolean
}

export interface IManagementOptions {
  id: string
  name: string
  shortcuts?: IShortcuts
  title: string
  type: string
  action: string
  visible: boolean
}
