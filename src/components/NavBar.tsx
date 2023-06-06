import { AiOutlineShoppingCart } from 'react-icons/ai'
import Input from './Input'

function NavBar() {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col ">
                    <h1 className="text-white font-bold text-2xl">
                        Jaegar Resto
                    </h1>
                    <p className="text-gray font-semibold">
                        Tuesday, 2 Feb 2023
                    </p>
                </div>
                <div className="flex my-auto">
                    <Input />
                    <button className="text-4xl text-white pl-5 mb-5">
                        <AiOutlineShoppingCart />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
