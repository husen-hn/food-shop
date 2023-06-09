import { Type } from '../utils/type'

function TypeSelector() {
    return (
        <select className="border-2 border-gray cursor-pointer rounded-lg drop-shadow-md bg-darkBlack text-white duration-300 px-5 py-2">
            {(Object.keys(Type) as Array<keyof typeof Type>).map((key) => (
                <option value={Type[key]} key={Type[key]}>
                    {Type[key]}
                </option>
            ))}
        </select>
    )
}

export default TypeSelector
