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
        <div className="relative mb-1">
            <LuSearch className="pointer-events-none ml-3 mr-2 w-5 h-5 absolute top-1/2 transform -translate-y-1/2 text-white dark:text-grayLight" />
            <input
                className="bg-gray dark:bg-lightGold focus:bg-gray appearance-none border-[1px] border-gray dark:border-dark dark:border-2 placeholder-grayLight dark:placeholder-lightGray focus:border-red rounded-md w-screen/2 sm:w-96 h-10 py-3 pl-10 pr-5 text-white dark:text-dark leading-tight focus:outline-none truncate"
                type="text"
                placeholder="Search for food, coffe..."
                value={value}
                onChange={async (e) => {
                    setValue(e.target.value)
                }}
            />
        </div>
    )
}

export default Input
