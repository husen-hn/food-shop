import './App.css'
import FoodList from './components/FoodList'
import NavBar from './components/NavBar'
import TabPane from './components/Tab/TabPane'
import Tabs from './components/Tab/Tabs'
import { Category } from './utils/category'

function App() {
    return (
        <>
            <NavBar />

            <Tabs>
                {(Object.keys(Category) as Array<keyof typeof Category>).map(
                    (key) => (
                        <TabPane
                            title={Category[key]}
                            key={Category[key] + 'App'}
                        >
                            <FoodList category={Category[key]} keyword="" />
                        </TabPane>
                    )
                )}
            </Tabs>
        </>
    )
}

export default App
