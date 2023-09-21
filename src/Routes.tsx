import { useRoutes } from 'react-router-dom'
import Home from './Home'
import FoodList from './components/FoodList'
import FoodPage from './components/FoodPage'
import NotFound from './components/NotFound'

function Routes() {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />,
            children: [
                { index: true, element: <FoodList /> },
                { path: ':slug', element: <FoodPage /> }
            ]
        },
        { path: '*', element: <NotFound /> }
    ])

    return element
}

export default Routes
