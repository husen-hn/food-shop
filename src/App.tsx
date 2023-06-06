import './App.css'
import NavBar from './components/NavBar'
import TabPane from './components/Tab/TabPane'
import Tabs from './components/Tab/Tabs'

function App() {
    return (
        <>
            <NavBar />
            <Tabs>
                <TabPane title="Hot Dishes">
                    <div>Basic</div>
                </TabPane>
                <TabPane title="Cold Dishes">
                    <div>Standard</div>
                </TabPane>
                <TabPane title="Soup">
                    <div>Premium</div>
                </TabPane>
                <TabPane title="Grill">
                    <div>Premium</div>
                </TabPane>
                <TabPane title="Appetizer">
                    <div>Premium</div>
                </TabPane>
                <TabPane title="Dessert">
                    <div>Premium</div>
                </TabPane>
            </Tabs>
        </>
    )
}

export default App
