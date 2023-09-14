import { useFoodListContext } from '../context/foodListContext'
import { FData } from '../hooks/useData'
import FoodItem from './FoodItem'
import FoodItemSkeleton from './FoodItemSkeleton'

function FoodList() {
    const {
        data,
        error,
        loading,
        cartData,
        foodItemClicked,
        cartLoadingItems,
        cartErrorItems,
        cartItemDelete,
        itemQty,
        setItemQty
    } = useFoodListContext()

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
                            itemSelectClicked={foodItemClicked}
                            itemRecipeClicked={() => null}
                            storageLoading={cartLoadingItems}
                            storageError={cartErrorItems}
                            cartItemDelete={cartItemDelete}
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
