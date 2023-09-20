import { createContext, useContext } from 'react'
import { FData } from '../hooks/useData'

type FoodList = {
    data: FData[]
    error: string
    loading: boolean
    foodItemClicked: (item: FData) => void
    cartData: { data: FData[]; subTotal: number }
    cartLoadingItems: boolean
    cartErrorItems: string
    itemQty: FData | undefined
    cartItemDelete: (id: number) => void
    setItemQty: (item: FData) => void
    foodCategories: string[]
    selectedTab: string
    tabSelection: (index: number) => void
    foodTypes: string[]
    foodType: string
    foodTypeSelection: (value: string) => void
    colorTheme: string
    toogleDarkMode: () => void
    cartDisplay: boolean
    setCartDisplay: (value: boolean) => void
    selectedCartFilterIndex: number
    setCartFilterIndexTab: (value: number) => void
    cartFilters: string[]
    storageLoading: boolean
    storageError: string
    itemOrderNote: FData | undefined
    cartItemUpdateNote: (value: FData | undefined) => void
}

export const FoodListContext = createContext<FoodList | undefined>(undefined)

export function useFoodListContext() {
    const foodList = useContext(FoodListContext)

    if (foodList === undefined) {
        throw new Error(
            'useFoodListContext must be used with a FoodListContext'
        )
    }

    return foodList
}
