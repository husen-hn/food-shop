import { Category } from '../utils/category'
import { Type } from '../utils/type'
import FoodItem from './FoodItem'

interface Props {
    category: Category
    keyword: string
}

function FoodList({ category }: Props) {
    return (
        <div className="flex flex-col m-10">
            {/* Header */}
            <div className="flex flex-row mb-20 items-center justify-between">
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
            {/* Body List */}
            <div className="grid grid-cols-4 gap-4">
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />
                <FoodItem
                    imgName="p1"
                    title="Spicy seasoned seafood noodles"
                    price="2.29"
                    inventory={20}
                />

                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
            </div>
        </div>
    )
}

export default FoodList
