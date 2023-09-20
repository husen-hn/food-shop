import { createContext, useContext } from 'react'
import { FData } from '../hooks/useData'

type FoodListHeader = {
    foodTypes: string[]
    foodType: string
    foodTypeSelection: (value: string) => void
    isDarkMode: boolean
    toogleDarkMode: () => void
    cartData: { data: FData[]; subTotal: number }
    cartDisplay: boolean
    setCartDisplay: (value: boolean) => void
    selectedCartFilterIndex: number
    setCartFilterIndexTab: (value: number) => void
    cartFilters: string[]
    cartLoadingItems: boolean
    cartErrorItems: string
    cartItemDelete: (value: number) => void
    orderQty: FData | undefined
    cartItemUpdateQty: (value: FData) => void
    orderNote: FData | undefined
    cartItemUpdateNote: (value: FData) => void
}

export const FoodListHeaderContext = createContext<FoodListHeader | undefined>(
    undefined
)

export function useFoodListHeaderContext() {
    const foodListHeader = useContext(FoodListHeaderContext)

    if (foodListHeader === undefined) {
        throw new Error(
            'useFoodListContext must be used with a FoodListHeaderContext'
        )
    }

    return foodListHeader
}
