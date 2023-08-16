import { useState } from 'react'
import './App.css'
import FoodList from './components/FoodList'
import NavBar from './components/NavBar'
import Tabs from './components/Tab/Tabs'
import { Category } from './utils/category'
import Footer from './components/Footer'
import useData, { FData } from './hooks/useData'
import fake_data from './data/fake_data'
import { Type } from './utils/type'
import useDarkSide from './hooks/useDarkSide'
import useStorage from './hooks/useStorage'
import FoodListHeader from './components/FoodListHeader'
import { useDebounce } from './hooks/useDebounce'

function App() {
    const foodCategories: string[] = (
        Object.keys(Category) as Array<keyof typeof Category>
    ).map((key) => Category[key])

    const foodTypes: string[] = (
        Object.keys(Type) as Array<keyof typeof Type>
    ).map((key) => Type[key])

    const [searchText, setSearchText] = useState('')
    const [selectedTab, setSelectedTab] = useState(foodCategories[0])
    const [foodType, setFoodType] = useState(foodTypes[0])

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

    const [selectedCartFilter, setCartFilterTab] = useState(0)
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

    console.log('App deleteDataId: ' + deleteDataId)
    console.log('App fData: ' + fData)

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
            <NavBar setSearchInputValue={(value) => setSearchText(value)} />

            <Tabs
                categories={foodCategories}
                selectedTab={selectedTab}
                tabSelection={(index) => {
                    setSelectedTab(foodCategories[index])
                    setFoodType(foodTypes[0])
                }}
            />

            <FoodListHeader
                foodTypes={foodTypes}
                foodTypeSelected={foodType}
                foodTypeSelection={(value) => setFoodType(value)}
                isDarkMode={colorTheme === 'light' ? false : true}
                toogleDarkMode={() => handleTheme()}
                cartData={getCartStorageData(fake_data, storageData)}
                cartDisplay={cartDisplay}
                setCartDisplay={setCartDisplay}
                selectedCartFilterIndex={selectedCartFilter}
                setCartFilterTab={setCartFilterTab}
                cartFilters={cartFilters}
                cartLoadingItems={storageLoading}
                cartErrorItems={storageError}
                cartItemDelete={setDeleteDataId}
                orderQty={qty}
                cartItemUpdateQty={setQty}
                orderNote={itemOrderNote}
                cartItemUpdateNote={setItemOrderNote}
            />

            <FoodList
                data={data}
                error={error}
                loading={loading}
                foodItemClicked={setFData}
                cartData={getCartStorageData(fake_data, storageData)}
                cartLoadingItems={storageLoading}
                cartErrorItems={storageError}
                cartItemDelete={setDeleteDataId}
                itemQty={qty}
                setItemQty={setQty}
            />

            <Footer />
        </>
    )
}

export default App
