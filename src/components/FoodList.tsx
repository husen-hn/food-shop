import { useCallback, useState } from 'react'
import { FData } from '../hooks/useData'
import FoodItem from './FoodItem'
import FoodItemSkeleton from './FoodItemSkeleton'
import DropDown from './DropDown'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'
import ShoppingCard from './Card/ShoppingCard'

interface Props {
    data: FData[]
    error: string
    loading: boolean
    foodTypes: string[]
    foodTypeSelected: string
    foodTypeSelection: (value: string) => void
    isDarkMode: boolean
    toogleDarkMode: () => void
}

function FoodList({
    data,
    error,
    loading,
    foodTypeSelection,
    foodTypeSelected,
    foodTypes,
    isDarkMode,
    toogleDarkMode
}: Props) {
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
                <h1 className="text-white dark:text-dark sm:text-lg md:text-2xl mt-5">
                    Choose Dishes
                </h1>

                <div className="inline-flex justify-center">
                    <DropDown
                        options={foodTypes.map((key) => key)}
                        selected={foodTypeSelected}
                        setSelected={(value) => handleFoodTypeSelection(value)}
                    />
                    <ShoppingCard />
                    <button
                        className={`${
                            effect && 'animate-wiggle'
                        } ml-1 inline-flex items-center justify-center h-full pl-2 bg-dark dark:bg-gold text-xl text-white dark:text-dark p-2 py-[11px] border-2 border-gray rounded-md`}
                        onClick={() => {
                            toogleDarkMode()
                            setEffect(true)
                        }}
                        onAnimationEnd={() => setEffect(false)}
                    >
                        {isDarkMode ? <BsSun /> : <BsFillMoonFill />}
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
                <h2 className="text-grayLight text-2xl font-bold w-full h-36">
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
