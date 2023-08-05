import { useCallback } from 'react'
import { FData } from '../hooks/useData'
import FoodItem from './FoodItem'
import FoodItemSkeleton from './FoodItemSkeleton'

interface Props {
    data: FData[]
    error: string
    loading: boolean
    foodItemClicked: (item: FData) => void
    cartData: { data: FData[]; subTotal: number }
    cartLoadingItems: boolean
    cartErrorItems: string
    itemQty: FData | undefined
    cartItemDelete: (id: number) => void
    setItemQty: (item: FData) => void
}

function FoodList({
    data,
    error,
    loading,
    foodItemClicked,
    cartData,
    cartLoadingItems,
    cartErrorItems,
    cartItemDelete,
    itemQty,
    setItemQty
}: Props) {
    const handleFoodItemClicked = useCallback(
        (value: FData) => {
            foodItemClicked(value)
        },
        [foodItemClicked]
    )

    const handleCartItemDelete = useCallback(
        (value: number) => {
            cartItemDelete(value)
        },
        [cartItemDelete]
    )

    return (
        <div className="flex flex-col m-10">
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
                            item={food}
                            cartItems={cartData.data}
                            itemClicked={handleFoodItemClicked}
                            storageLoading={cartLoadingItems}
                            storageError={cartErrorItems}
                            cartItemDelete={handleCartItemDelete}
                            itemQty={
                                itemQty?.id === food.id ? itemQty.qty : food.qty
                            }
                            setItemQty={(value: number) => {
                                setItemQty({
                                    id: food.id,
                                    qty: value,
                                    orderNote: food.orderNote
                                } as FData)
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default FoodList
