import { useCallback, useState } from 'react'
import fake_data from '../data/fake_data'
import useData from '../hooks/useData'
import { Category } from '../utils/category'
import FoodItem from './FoodItem'
import FoodItemSkeleton from './FoodItemSkeleton'
import TypeSelector from './TypeSelector'

interface Props {
    category: Category
    keyword: string
    typeSelection: () => void
}

function FoodList({ category, keyword, typeSelection }: Props) {
    const [foodType, setFoodType] = useState('Breakfast')
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
                <h1 className="text-white text-2xl font-bold mt-5">
                    Choose Dishes
                </h1>
                <TypeSelector
                    selected={(value) => {
                        setFoodType(value)
                        handleTypeSelection()
                    }}
                />
            </div>
            {/* Body List */}
            {loading ? (
                <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                        <FoodItemSkeleton key={crypto.randomUUID()} />
                    ))}
                </div>
            ) : error ? (
                <h2 className="text-gray text-2xl font-bold w-screen">
                    {error}
                </h2>
            ) : data.length === 0 ? (
                <h2 className="text-gray text-2xl font-bold w-screen">
                    There are no food items
                </h2>
            ) : (
                <div className="grid grid-cols-4 gap-4">
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
