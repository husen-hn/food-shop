import { useFoodListContext } from '../context/foodListContext'
import { FoodListHeaderContext } from '../context/foodListHeaderContext'
import { TabsContext } from '../context/tabsContext'
import { FData } from '../hooks/useData'
import FoodItem from './FoodItem'
import FoodItemSkeleton from './FoodItemSkeleton'
import FoodListHeader from './FoodListHeader'
import Tabs from './Tab/Tabs'

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
        setItemQty,
        foodCategories,
        selectedTab,
        tabSelection,
        foodTypes,
        foodType,
        foodTypeSelection,
        colorTheme,
        toogleDarkMode,
        cartDisplay,
        setCartDisplay,
        selectedCartFilterIndex,
        setCartFilterIndexTab,
        cartFilters,
        storageLoading,
        storageError,
        itemOrderNote,
        cartItemUpdateNote: setItemOrderNote
    } = useFoodListContext()

    return (
        <>
            <TabsContext.Provider
                value={{
                    categories: foodCategories,
                    selectedTab: selectedTab,
                    tabSelection
                }}
            >
                <Tabs />
            </TabsContext.Provider>

            <FoodListHeaderContext.Provider
                value={{
                    foodTypes,
                    foodType,
                    foodTypeSelection,
                    isDarkMode: colorTheme === 'light' ? false : true,
                    toogleDarkMode,
                    cartData,
                    cartDisplay,
                    setCartDisplay,
                    selectedCartFilterIndex,
                    setCartFilterIndexTab,
                    cartFilters,
                    cartLoadingItems: storageLoading,
                    cartErrorItems: storageError,
                    cartItemDelete,
                    orderQty: itemQty,
                    cartItemUpdateQty: setItemQty,
                    orderNote: itemOrderNote,
                    cartItemUpdateNote: setItemOrderNote
                }}
            >
                <FoodListHeader />
            </FoodListHeaderContext.Provider>

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
                                    itemQty?.id === food.id
                                        ? itemQty.qty
                                        : food.qty
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
        </>
    )
}

export default FoodList
