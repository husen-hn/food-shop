import { AiOutlineShoppingCart } from 'react-icons/ai'
import Input from './Input'
import { useCallback } from 'react'
import moment from 'moment'

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

    const currentDate = moment().format('MMMM Do YYYY')

    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="text-white font-bold text-2xl">
                        Jaegar Resto
                    </h1>
                    <p className="text-grayLight">{currentDate}</p>
                </div>
                <div className="flex my-auto mt-5 md:mt-0">
                    <Input setSearchValue={handleSearchOnChange} />
                    <button className="text-4xl text-white pl-5 mb-5 animate-wiggle">
                        <AiOutlineShoppingCart />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
