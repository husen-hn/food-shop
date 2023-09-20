import './App.css'
import Routes from './Routes'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Routes />
            <Footer />
        </Router>
    )
}

export default App
