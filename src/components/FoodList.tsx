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
    foodItemClicked: (item: FData) => void
    cartData: { data: FData[]; subTotal: number }
    cartDisplay: boolean
    setCartDisplay: (value: boolean) => void
    selectedCartFilterIndex: number
    setCartFilterTab: (value: number) => void
    cartFilters: Array<string>
    cartLoadingItems: boolean
    cartErrorItems: string
    cartItemDelete: (id: number) => void
    cartItemUpdateQtyAndNote: (item: FData) => void
}

function FoodList({
    data,
    error,
    loading,
    foodTypeSelection,
    foodTypeSelected,
    foodTypes,
    isDarkMode,
    toogleDarkMode,
    foodItemClicked,
    cartData,
    cartDisplay,
    setCartDisplay,
    selectedCartFilterIndex,
    setCartFilterTab,
    cartFilters,
    cartLoadingItems,
    cartErrorItems,
    cartItemDelete,
    cartItemUpdateQtyAndNote
}: Props) {
    const [effect, setEffect] = useState(false)

    const handleFoodTypeSelection = useCallback(
        (value: string) => {
            foodTypeSelection(value)
        },
        [foodTypeSelection]
    )
    const handleToogleDarkMode = useCallback(() => {
        toogleDarkMode()
    }, [toogleDarkMode])
    const handleFoodItemClicked = useCallback(
        (value: FData) => {
            foodItemClicked(value)
        },
        [foodItemClicked]
    )
    const handleSetCartFilterTab = useCallback(
        (value: number) => {
            setCartFilterTab(value)
        },
        [setCartFilterTab]
    )
    const handleCartItemDelete = useCallback(
        (value: number) => {
            cartItemDelete(value)
        },
        [cartItemDelete]
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
                    <ShoppingCard
                        data={cartData}
                        cartDisplay={cartDisplay}
                        setCartDisplay={setCartDisplay}
                        selectedFilterIndex={selectedCartFilterIndex}
                        setFilterTab={handleSetCartFilterTab}
                        filters={cartFilters}
                        loading={cartLoadingItems}
                        error={cartErrorItems}
                        cartItemDelete={handleCartItemDelete}
                        updateOrderQtyAndNote={cartItemUpdateQtyAndNote}
                    />
                    <button
                        className={`${
                            effect && 'animate-wiggle'
                        } ml-1 inline-flex items-center justify-center h-full pl-2 bg-dark dark:bg-gold text-xl text-white dark:text-dark p-2 py-[11px] border-2 border-gray rounded-md`}
                        onClick={() => {
                            handleToogleDarkMode()
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
                            item={food}
                            cartItems={cartData.data}
                            itemClicked={handleFoodItemClicked}
                            storageLoading={cartLoadingItems}
                            storageError={cartErrorItems}
                            cartItemDelete={handleCartItemDelete}
                            setItemQty={(value: number) => {
                                cartItemUpdateQtyAndNote({
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
