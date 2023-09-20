import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Tabs from './components/Tab/Tabs'
import { Category } from './services/category'
import useData, { FData } from './hooks/useData'
import fake_data from './services/data/fake_data'
import { Type } from './services/type'
import useDarkSide from './hooks/useDarkSide'
import useStorage from './hooks/useStorage'
import FoodListHeader from './components/FoodListHeader'
import { useDebounce } from './hooks/useDebounce'
import { NavBarContext } from './context/navBarContext'
import { TabsContext } from './context/tabsContext'
import { FoodListHeaderContext } from './context/foodListHeaderContext'
import { FoodListContext } from './context/foodListContext'
import { Outlet } from 'react-router-dom'

function Home() {
    const foodCategories: string[] = (
        Object.keys(Category) as Array<keyof typeof Category>
    ).map((key) => Category[key])

    const foodTypes: string[] = (
        Object.keys(Type) as Array<keyof typeof Type>
    ).map((key) => Type[key])

    const [searchText, setSearchText] = useState('')
    const [selectedTab, setSelectedTab] = useState(foodCategories[0])
    const [foodType, setFoodType] = useState<string>(foodTypes[0])

    const { data, error, loading } = useData({
        fData: fake_data,
        deps: {
            keyword: searchText,
            category: selectedTab,
            type: foodType
        }
    })

    const { colorTheme, setTheme } = useDarkSide()

    const handleTheme = () => {
        setTheme(colorTheme)
        colorTheme === 'light'
            ? (window.document.documentElement.className = 'darkRoot')
            : (window.document.documentElement.className = 'lightRoot')
    }

    const [cartDisplay, setCartDisplay] = useState(false)

    const [selectedCartFilterIndex, setCartFilterIndexTab] = useState(0)
    const cartFilters = ['Dine In', 'To Go', 'Delivery']

    const [fData, setFData] = useState<FData | undefined>(undefined)

    const [deleteDataId, setDeleteDataId] = useState<number | undefined>(
        undefined
    )

    const {
        storageData,
        error: storageError,
        loading: storageLoading
    } = useStorage({
        key: 'cartItems',
        data: fData,
        deleteDataId: deleteDataId,
        resetData: () => setFData(undefined),
        resetDeleteData: () => setDeleteDataId(undefined)
    })

    const getCartStorageData = (
        fakeData: FData[],
        storageData: FData[]
    ): { data: FData[]; subTotal: number } => {
        // data from strorage is imperfect, so find the id in fake_data to get complete data
        const data: FData[] = []
        storageData.map((sd) => {
            const fItem: FData | undefined = fakeData.find(
                (i) => i.id === sd.id
            )

            if (fItem) {
                fItem.qty = sd.qty
                fItem.orderNote = sd.orderNote
                data.push(fItem)
            }
        })

        const subTotal = getCartSubTotal(data)

        return { data, subTotal }
    }

    const getCartSubTotal = (data: FData[]): number => {
        let subTotal = 0
        data.map((order) => {
            subTotal += parseFloat(order.price) * order.qty
            subTotal = parseFloat(Number(subTotal).toFixed(2))
        })

        return subTotal
    }

    const [qty, setQty] = useState<FData | undefined>(undefined)

    useDebounce(() => {
        // if => not sending initial qty
        if (qty && qty.qty !== undefined && qty.qty !== 0) {
            // prevent infinit re-rendering with same value
            const storageItem = storageData.find((item) => item.id === qty.id)
            if (storageItem?.qty !== qty.qty) {
                setFData(qty)
            }
        }
    }, 500)

    const [itemOrderNote, setItemOrderNote] = useState<FData | undefined>(
        undefined
    )

    useDebounce(() => {
        // if => not sending initial orderNote
        if (itemOrderNote && itemOrderNote.orderNote !== undefined) {
            // prevent infinit re-rendering with same value
            const storageItem = storageData.find(
                (item) => item.id === itemOrderNote.id
            )
            if (storageItem?.orderNote !== itemOrderNote.orderNote) {
                setFData(itemOrderNote)
            }
        }
    }, 500)

    return (
        <>
            <NavBarContext.Provider
                value={{
                    setSearchInputValue: (value) => setSearchText(value)
                }}
            >
                <NavBar />
            </NavBarContext.Provider>

            <FoodListContext.Provider
                value={{
                    data,
                    error,
                    loading,
                    foodItemClicked: setFData,
                    cartData: getCartStorageData(fake_data, storageData),
                    cartLoadingItems: storageLoading,
                    cartErrorItems: storageError,
                    cartItemDelete: setDeleteDataId,
                    itemQty: qty,
                    setItemQty: setQty,
                    foodCategories,
                    selectedTab,
                    tabSelection: (index) => {
                        setSelectedTab(foodCategories[index])
                        setFoodType(foodTypes[0])
                    },
                    foodTypes,
                    foodType,
                    foodTypeSelection: (value) => setFoodType(value),
                    colorTheme,
                    toogleDarkMode: () => handleTheme(),
                    cartDisplay,
                    setCartDisplay,
                    selectedCartFilterIndex,
                    setCartFilterIndexTab,
                    cartFilters,
                    storageLoading,
                    storageError,
                    itemOrderNote,
                    cartItemUpdateNote: setItemOrderNote
                }}
            >
                <Outlet />
            </FoodListContext.Provider>
        </>
    )
}

export default Home
