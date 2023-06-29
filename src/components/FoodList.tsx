import { useCallback, useState } from 'react'
import fake_data from '../data/fake_data'
import useData from '../hooks/useData'
import { Category } from '../utils/category'
import FoodItem from './FoodItem'
import FoodItemSkeleton from './FoodItemSkeleton'
import DropDown from './DropDown'
import { Type } from '../utils/type'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'

interface Props {
    category: Category
    keyword: string
    typeSelection: () => void
}

function FoodList({ category, keyword, typeSelection }: Props) {
    const [foodType, setFoodType] = useState('Breakfast')
    const [dark, setDark] = useState(true)
    const [effect, setEffect] = useState(false)

    const { data, error, loading } = useData({
        fData: fake_data,
        deps: {
            keyword,
            category,
            type: foodType
        }
    })

    const handleTypeSelection = useCallback(() => {
        typeSelection()
    }, [typeSelection])

    return (
        <div className="flex flex-col m-10">
            {/* Header */}
            <div className="flex flex-row mb-20 items-center justify-between">
                <h1 className="text-white sm:text-lg md:text-2xl mt-5">
                    Choose Dishes
                </h1>
                {/* <DropDown
                    options={(
                        Object.keys(Type) as Array<keyof typeof Type>
                    ).map((key) => Type[key])}
                    selected={(value) => {
                        setFoodType(value)
                        handleTypeSelection()
                    }}
                /> */}
                <div>
                    <button className="bg-dark text-xl text-white p-2 border-2 border-gray rounded-md ">
                        <AiOutlineShoppingCart />
                    </button>
                    <button
                        className={`${
                            effect && 'animate-wiggle'
                        } bg-dark text-xl text-white p-2 border-2 border-gray rounded-md`}
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
                <h2 className="text-grayLight text-2xl font-bold w-full">
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
