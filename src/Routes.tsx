import { useRoutes } from 'react-router-dom'
import Home from './Home'
import FoodList from './components/FoodList'
import FoodPage from './components/FoodPage'

function Routes() {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />,
            children: [
                { index: true, element: <FoodList /> },
                { path: ':slug', element: <FoodPage /> }
            ]
        }
    ])

    return element
}

export default Routes
