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
            <div className="flex flex-col md:flex-row justify-center sm:justify-between">
                <div className="flex flex-col">
                    <h1 className="text-white dark:text-dark text-2xl text-center">
                        Mishka restaurant
                    </h1>
                </div>
                <div className="flex my-auto mt-5 md:mt-0 justify-center">
                    <Input setSearchValue={handleSearchOnChange} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
