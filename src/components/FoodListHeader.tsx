import { BsSun, BsFillMoonFill } from 'react-icons/bs'
import ShoppingCard from './Card/ShoppingCard'
import DropDown from './DropDown'
import { useCallback, useState } from 'react'
import { FData } from '../hooks/useData'

interface Props {
    foodTypes: string[]
    foodTypeSelected: string
    foodTypeSelection: (value: string) => void
    isDarkMode: boolean
    toogleDarkMode: () => void
    cartData: { data: FData[]; subTotal: number }
    cartDisplay: boolean
    setCartDisplay: (value: boolean) => void
    selectedCartFilterIndex: number
    setCartFilterTab: (value: number) => void
    cartFilters: Array<string>
    cartLoadingItems: boolean
    cartErrorItems: string
    cartItemDelete: (id: number) => void
    orderQty?: FData
    cartItemUpdateQty: (item: FData) => void
    orderNote?: FData
    cartItemUpdateNote: (item: FData) => void
}

function FoodListHeader({
    foodTypeSelection,
    foodTypeSelected,
    foodTypes,
    isDarkMode,
    toogleDarkMode,
    cartData,
    cartDisplay,
    setCartDisplay,
    selectedCartFilterIndex,
    setCartFilterTab,
    cartFilters,
    cartLoadingItems,
    cartErrorItems,
    cartItemDelete,
    orderNote,
    orderQty,
    cartItemUpdateNote,
    cartItemUpdateQty
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
        <div className="flex flex-col mt-10 ml-10 mr-10">
            <div className="flex flex-col sm:flex-row mb-20 items-center justify-between">
                <h1 className="text-white dark:text-dark pb-8 text-lg md:text-2xl font-bold mt-5">
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
                        orderQty={orderQty}
                        updateOrderQty={cartItemUpdateQty}
                        orderNote={orderNote}
                        updateOrderNote={cartItemUpdateNote}
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
        </div>
    )
}

export default FoodListHeader
