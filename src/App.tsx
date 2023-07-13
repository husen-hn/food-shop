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

    const saveCartStorage = (item: FData) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]')

        if (cartItems.length !== 0) {
            // if Cart is not empty
            const fItemIndex = cartItems.findIndex(
                (i: { id: number }) => i.id === item.id
            )

            if (fItemIndex !== -1 || fItemIndex === undefined) {
                // if item is available on cart
                const fItem = cartItems[fItemIndex]
                cartItems[fItemIndex] = {
                    id: fItem.id,
                    qty: fItem.qty + 1,
                    orderNote: fItem.orderNote
                }

                localStorage.setItem(
                    'cartItems',
                    JSON.stringify([...cartItems])
                )
            } else {
                // if item is not available on cart
                localStorage.setItem(
                    'cartItems',
                    JSON.stringify([
                        ...cartItems,
                        {
                            id: item.id,
                            qty: 1,
                            orderNote: ''
                        }
                    ])
                )
            }
        } else {
            // if Cart is empty
            localStorage.setItem(
                'cartItems',
                JSON.stringify([
                    {
                        id: item.id,
                        qty: 1,
                        orderNote: ''
                    }
                ])
            )
        }
    }
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

            <FoodList
                data={data}
                error={error}
                loading={loading}
                foodTypes={foodTypes}
                foodTypeSelected={foodType}
                foodTypeSelection={(value) => setFoodType(value)}
                isDarkMode={colorTheme === 'light' ? false : true}
                toogleDarkMode={() => handleTheme()}
                foodItemClicked={saveCartStorage}
            />

            <Footer />
        </>
    )
}

export default App
