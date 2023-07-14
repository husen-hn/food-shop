import { useState } from 'react'
import './App.css'
import FoodList from './components/FoodList'
import NavBar from './components/NavBar'
import Tabs from './components/Tab/Tabs'
import { Category } from './utils/category'
import Footer from './components/Footer'
import useData from './hooks/useData'
import fake_data from './data/fake_data'
import { Type } from './utils/type'
import useDarkSide from './hooks/useDarkSide'
import { CartStorage } from './utils/cartStorage'

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
                foodItemClicked={CartStorage.save}
                cartData={[]}
                cartDisplay={cartDisplay}
                setCartDisplay={setCartDisplay}
                selectedCartFilterIndex={selectedCartFilter}
                setCartFilterTab={setCartFilterTab}
                cartFilters={cartFilters}
                cartLoadingItems={false}
                cartErrorItems=""
            />

            <Footer />
        </>
    )
}

export default App
