import { useCallback } from 'react'
import { Type } from '../utils/type'

interface Props {
    selected: (value: string) => void
}

function TypeSelector({ selected }: Props) {
    const handleOnChange = useCallback(
        (value: string) => {
            selected(value)
        },
        [selected]
    )
    return (
        <select
            className="border-2 border-gray cursor-pointer rounded-lg drop-shadow-md bg-darkBlack text-white duration-300 px-5 py-2 text-sm sm:text-md"
            onChange={(e) => handleOnChange(e.target.value)}
        >
            {(Object.keys(Type) as Array<keyof typeof Type>).map((key) => (
                <option value={Type[key]} key={Type[key]}>
                    {Type[key]}
                </option>
            ))}
        </select>
    )
}

export default TypeSelector
