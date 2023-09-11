import { createContext, useContext } from 'react'

type NavBar = {
    setSearchInputValue: (value: string) => void
}

export const NavBarContext = createContext<NavBar | undefined>(undefined)

export function useNavBarContext() {
    const navBar = useContext(NavBarContext)

    if (navBar === undefined) {
        throw new Error('useNavBarContext must be used with a NavBarContext')
    }

    return navBar
}
