import { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { useDebounce } from '../hooks/useDebounce'

interface Props {
    setSearchValue: (value: string) => void
}

function Input({ setSearchValue }: Props) {
    const [value, setValue] = useState('')
    useDebounce(() => {
        setSearchValue(value)
    }, 1000)

    return (
        <div>
            <div className="relative mb-6">
                <LuSearch className="pointer-events-none ml-3 mr-2 w-5 h-5 absolute top-1/2 transform -translate-y-1/2 text-white" />
                <input
                    className="bg-gray focus:bg-gray appearance-none border-[1px] border-grayLight placeholder-grayLight focus:border-red rounded-lg w-64 h-10 py-6 pl-10 pr-5 text-white leading-tight focus:outline-none truncate"
                    type="text"
                    placeholder="Search for food, coffe..."
                    value={value}
                    onChange={async (e) => {
                        setValue(e.target.value)
                    }}
                />
            </div>
        </div>
    )
}

export default Input
