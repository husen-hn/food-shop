import { AiOutlineShoppingCart } from 'react-icons/ai'
import Input from './Input'
import { useCallback } from 'react'

interface Props {
    setSearchInputValue: (value: string) => void
}

function NavBar({ setSearchInputValue }: Props) {
    const handleSearchOnChange = useCallback(
        (value: string) => {
            setSearchInputValue(value)
        },
        [setSearchInputValue]
    )

    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="text-white font-bold text-2xl">
                        Jaegar Resto
                    </h1>
                    <p className="text-gray font-semibold">
                        Tuesday, 2 Feb 2023
                    </p>
                </div>
                <div className="flex my-auto mt-5 md:mt-0">
                    <Input setSearchValue={handleSearchOnChange} />
                    <button className="text-4xl text-white pl-5 mb-5">
                        <AiOutlineShoppingCart />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
