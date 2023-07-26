import useImage from '../hooks/useImage'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiAlertCircle } from 'react-icons/fi'
import { FData } from '../hooks/useData'
import { useCallback, useState } from 'react'
import { BiError } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import Loading from './Loading'
import { useDebounce } from '../hooks/useDebounce'

interface Props {
    item: FData
    cartItems: FData[]
    itemClicked: (item: FData) => void
    storageLoading: boolean
    storageError: string | null
    cartItemDelete: (id: number) => void
    setItemQty: (qty: number) => void
}

function FoodItem({
    item,
    cartItems,
    itemClicked,
    storageLoading,
    storageError,
    cartItemDelete,
    setItemQty
}: Props) {
    const { loading, error, image } = useImage({ imgName: item.image })

    const handleItemClick = useCallback(
        (item: FData) => {
            itemClicked(item)
        },
        [itemClicked]
    )

    const handleBtnDisable = (): boolean => {
        if (cartItems) {
            const i = cartItems.find((i) => i.id === item.id)
            if (i) return true
            else return false
        } else return false
    }

    const handleDeleteItem = useCallback(
        (id: number) => {
            cartItemDelete(id)
        },
        [cartItemDelete]
    )

    const handleSetQty = useCallback(
        (qty: number) => {
            setItemQty(qty)
        },
        [setItemQty]
    )

    const [qty, setQty] = useState(item.qty)
    useDebounce(() => {
        // if => not sending initial qty
        if (qty !== item.qty) handleSetQty(qty)
    }, 500)

    return (
        <div className="animate-fade-in-up bg-dark dark:bg-gold items-center w-70 h-80 rounded-xl mt-32">
            {loading ? (
                <div className="bg-white dark:bg-gold w-44 h-44 -mt-20 ml-20 mr-20 rounded-full" />
            ) : error ? (
                <div className="bg-white dark:bg-gold w-44 h-44 -mt-20 ml-20 mr-20 rounded-full">
                    {error as string}
                </div>
            ) : (
                <img
                    className="w-44 h-44 -mt-20 mx-auto rounded-full"
                    src={image}
                    alt={item.title}
                />
            )}

            <div className="flex flex-col items-center">
                <h1 className="text-white dark:text-dark mx-2 text-center mt-5 line-clamp-1">
                    {item.title}
                </h1>

                <h2 className="text-white dark:text-dark mt-5 font-bold">
                    $ {item.price}
                </h2>
                <h2 className="text-grayLight mt-5 text-center">
                    {item.inventory} Bowls available
                </h2>
                <div className="flex flex-row mt-5">
                    {storageLoading ? (
                        <Loading />
                    ) : storageError ? (
                        <BiError />
                    ) : handleBtnDisable() ? (
                        <div className="flex mr-2">
                            <button
                                className="text-red border-red font-bold border-2 rounded-md text-center justify-center text-lg mr-2 px-2"
                                onClick={() => handleDeleteItem(item.id)}
                            >
                                <AiOutlineDelete />
                            </button>
                            <input
                                className="bg-gray dark:bg-lightGold focus:bg-gray text-sm text-center appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-11 h-11 text-white dark:text-dark leading-tight focus:outline-none truncate"
                                placeholder="Qty"
                                value={qty}
                                onChange={(e) => {
                                    if (
                                        Number(e.target.value) &&
                                        Number(e.target.value) > 0
                                    )
                                        setQty(Number(e.target.value))
                                }}
                                type="number"
                            />
                        </div>
                    ) : (
                        <button
                            className="mr-2 text-red dark:text-gray text-md p-2 border-2 border-gray rounded-md flex items-center gap-3 px-3 text-center"
                            onClick={() => handleItemClick(item)}
                        >
                            <AiOutlinePlus /> Select
                        </button>
                    )}

                    <button className="text-grayLight text-md p-2 border-2 border-gray rounded-md flex items-center gap-3 px-3 text-center">
                        <FiAlertCircle /> Recipe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
