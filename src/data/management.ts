import { IManagementOptions } from "models";

export const initialManagement: IManagementOptions[] = [
  {
    id: '0',
    name: 'Sort by title',
    title: 'Sort alphabetically by title',
    type: 'button',
    action: 'sortByTitle',
    visible: true,
  },
  {
    id: '1',
    name: 'Sort by Website',
    title: 'Sort alphabetically by url',
    type: 'button',
    action: 'sortByWebsite',
    visible: true
  },
  {
    id: '2',
    name: 'Sort by Domain',
    title: 'Sort by domain excluding subdomains',
    type: 'button',
    action: 'sortByDomain',
    visible: true
  },
  {
    id: '3',
    name: 'Move Tab to New Window',
    title: 'Moves this tab to new window',
    type: 'button',
    action: 'moveToNew',
    visible: true
  },
  {
    id: '4',
    name: 'Merge all windows in one',
    title: 'Merge all windows in the current one',
    type: 'button',
    action: 'mergeAllWindows',
    visible: true
  },
  {
    id: '5',
    name: 'Close all tabs with sound',
    title: 'Close tabs currently playing sound',
    type: 'button',
    action: 'closeAudibleTabs',
    visible: true
  }

]
