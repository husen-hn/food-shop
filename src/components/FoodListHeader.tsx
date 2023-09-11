import { BsSun, BsFillMoonFill } from 'react-icons/bs'
import ShoppingCard from './Card/ShoppingCard'
import DropDown from './DropDown'
import { useState } from 'react'
import { useFoodListHeaderContext } from '../context/foodListHeaderContext'

function FoodListHeader() {
    const {
        foodTypes,
        togleDarkMode,
        isDarkMode,
        foodTypeSelected,
        foodTypeSelection,
        cartData,
        cartDisplay,
        setCartDisplay,
        selectedCartFilterIndex,
        setCartFilterTab,
        cartFilters,
        cartLoadingItems,
        cartErrorItems,
        cartItemDelete,
        orderQty,
        cartItemUpdateQty,
        orderNote,
        cartItemUpdateNote
    } = useFoodListHeaderContext()
    const [effect, setEffect] = useState(false)

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
                        setSelected={(value) => foodTypeSelection(value)}
                    />
                    <ShoppingCard
                        data={cartData}
                        cartDisplay={cartDisplay}
                        setCartDisplay={setCartDisplay}
                        selectedFilterIndex={selectedCartFilterIndex}
                        setFilterTab={setCartFilterTab}
                        filters={cartFilters}
                        loading={cartLoadingItems}
                        error={cartErrorItems}
                        cartItemDelete={cartItemDelete}
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
                            togleDarkMode()
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
