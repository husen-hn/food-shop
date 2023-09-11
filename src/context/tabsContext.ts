import { createContext, useContext } from 'react'

type Tabs = {
    categories: string[]
    selectedTab: string
    tabSelection: (value: number) => void
}

export const TabsContext = createContext<Tabs | undefined>(undefined)

export function useTabsContext() {
    const tabs = useContext(TabsContext)

    if (tabs === undefined) {
        throw new Error('useTabsContext must be used with a TabsContext')
    }

    return tabs
}
