import { useCallback, useState } from 'react'
import { FData } from '../hooks/useData'
import FoodItem from './FoodItem'
import FoodItemSkeleton from './FoodItemSkeleton'
import DropDown from './DropDown'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'

interface Props {
    data: FData[]
    error: string
    loading: boolean
    foodTypes: string[]
    foodTypeSelected: string
    foodTypeSelection: (value: string) => void
}

function FoodList({
    data,
    error,
    loading,
    foodTypeSelection,
    foodTypeSelected,
    foodTypes
}: Props) {
    const [dark, setDark] = useState(true)
    const [effect, setEffect] = useState(false)

    const handleFoodTypeSelection = useCallback(
        (value: string) => {
            foodTypeSelection(value)
        },
        [foodTypeSelection]
    )

    return (
        <div className="flex flex-col m-10">
            {/* Header */}
            <div className="flex flex-row mb-20 items-center justify-between">
                <h1 className="text-white sm:text-lg md:text-2xl mt-5">
                    Choose Dishes
                </h1>

                <div className="justify-center ">
                    <DropDown
                        options={foodTypes.map((key) => key)}
                        selected={foodTypeSelected}
                        setSelected={(value) => handleFoodTypeSelection(value)}
                    />
                    <button className="inline-flex items-center justify-center h-full ml-1 pl-2 bg-dark text-xl text-white p-2 py-[11px] border-2 border-gray rounded-md">
                        <AiOutlineShoppingCart />
                    </button>
                    <button
                        className={`${
                            effect && 'animate-wiggle'
                        } ml-1 inline-flex items-center justify-center h-full pl-2 bg-dark text-xl text-white p-2 py-[11px] border-2 border-gray rounded-md`}
                        onClick={() => {
                            setDark(!dark)
                            setEffect(true)
                        }}
                        onAnimationEnd={() => setEffect(false)}
                    >
                        {dark ? <BsSun /> : <BsFillMoonFill />}
                    </button>
                </div>
            </div>
            {/* Body List */}
            {loading ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                        <FoodItemSkeleton key={crypto.randomUUID()} />
                    ))}
                </div>
            ) : error ? (
                <h2 className="text-grayLight text-2xl font-bold w-full">
                    {error}
                </h2>
            ) : data.length === 0 ? (
                <h2 className="text-grayLight text-2xl font-bold w-full h-36 ">
                    There are no food items
                </h2>
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((food) => (
                        <FoodItem
                            key={food.title + food.price + food.inventory}
                            imgName={food.image}
                            title={food.title}
                            price={food.price}
                            inventory={food.inventory}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default FoodList
