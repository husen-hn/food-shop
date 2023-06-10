import { useCallback, useState } from 'react'
import { LuSearch } from 'react-icons/lu'

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

interface Props {
    onSearchTextChange: (text: string) => void
}

function Input({ onSearchTextChange }: Props) {
    const [value, setValue] = useState('')

    const handleOnChange = useCallback(
        (value: string) => {
            onSearchTextChange(value)
        },
        [onSearchTextChange]
    )

    return (
        <div>
            <div className="relative mb-6">
                <LuSearch className="pointer-events-none mx-2 w-5 h-5 absolute top-1/2 transform -translate-y-1/2 text-white" />
                <input
                    className="bg-darkLight focus:bg-darkLight appearance-none border-2 border-darkLight focus:border-red rounded-xl w-full h-10 py-6 px-8 text-white leading-tight focus:outline-none overflow-ellipsis"
                    type="text"
                    placeholder="Search for food, coffe, etc..."
                    value={value}
                    onChange={async (e) => {
                        setValue(e.target.value)
                        await delay(1000).then(() =>
                            handleOnChange(e.target.value)
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default Input
