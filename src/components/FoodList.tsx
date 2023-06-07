import { Category } from '../utils/category'
import { Type } from '../utils/type'

interface Props {
    category: Category
    keyword: string
}

function FoodList({ category }: Props) {
    return (
        <div className="flex flex-col m-10">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-white text-2xl font-bold mt-5">
                    Choose Dishes
                </h1>
                <select className="border-2 border-gray cursor-pointer rounded-lg drop-shadow-md bg-darkBlack text-white duration-300 px-5 py-2">
                    {(Object.keys(Type) as Array<keyof typeof Type>).map(
                        (key) => (
                            <option value={Type[key]}>{Type[key]}</option>
                        )
                    )}
                </select>
            </div>
            <div></div>
        </div>
    )
}

export default FoodList
