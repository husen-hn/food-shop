import { useNavBarContext } from '../context/navBarContext'
import Input from './Input'

function NavBar() {
    const nvbrCtx = useNavBarContext()
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex flex-col md:flex-row justify-center sm:justify-between">
                <div className="flex flex-col">
                    <h1 className="text-white dark:text-dark text-2xl text-center">
                        Jaegar Resto
                    </h1>
                </div>
                <div className="flex my-auto mt-5 md:mt-0 justify-center">
                    <Input setSearchValue={nvbrCtx.setSearchInputValue} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
