import { useState } from 'react'
import './App.css'
import FoodList from './components/FoodList'
import NavBar from './components/NavBar'
import TabPane from './components/Tab/TabPane'
import Tabs from './components/Tab/Tabs'
import { Category } from './utils/category'
import Footer from './components/Footer'

function App() {
    const [searchText, setSearchText] = useState('')

    return (
        <>
            <NavBar setSearchInputValue={(value) => setSearchText(value)} />

            <Tabs tabSelection={() => setSearchText('')}>
                {(Object.keys(Category) as Array<keyof typeof Category>).map(
                    (key) => (
                        <TabPane
                            title={Category[key]}
                            key={Category[key] + 'App'}
                        >
                            <FoodList
                                category={Category[key]}
                                keyword={searchText}
                                typeSelection={() => setSearchText('')}
                            />
                        </TabPane>
                    )
                )}
            </Tabs>

            <Footer />
        </>
    )
}

export default App
