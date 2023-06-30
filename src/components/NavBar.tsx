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
                    <h1 className="text-white text-2xl">Mishka restaurant</h1>
                </div>
                <div className="flex my-auto mt-5 md:mt-0">
                    <Input setSearchValue={handleSearchOnChange} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
