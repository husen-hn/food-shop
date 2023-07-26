import { AiOutlineDelete } from 'react-icons/ai'
import { FData } from '../../hooks/useData'
import { useCallback, useState } from 'react'
import useImage from '../../hooks/useImage'
import { useDebounce } from '../../hooks/useDebounce'

interface Props {
    order: FData
    deleteClicked: (id: number) => void
    setOrderQty: (value: number) => void
    setOrderNote: (value: string) => void
}

function CartListItems({
    order,
    deleteClicked,
    setOrderQty,
    setOrderNote
}: Props) {
    const handleDeleteClicked = useCallback(
        (value: number) => {
            deleteClicked(value)
        },
        [deleteClicked]
    )
    const handleSetOrderQty = useCallback(
        (value: number) => {
            setOrderQty(value)
        },
        [setOrderQty]
    )
    const handleSetOrderNote = useCallback(
        (value: string) => {
            setOrderNote(value)
        },
        [setOrderNote]
    )

    const { loading, error, image } = useImage({ imgName: order.image })

    const [itemQty, setItemQty] = useState(order.qty)
    useDebounce(() => {
        // if => not sending initial qty
        if (itemQty !== order.qty) handleSetOrderQty(itemQty)
    }, 1000)

    const [itemOrderNote, setItemOrderNote] = useState(order.orderNote)
    useDebounce(() => {
        // if => not sending initial qty
        if (itemOrderNote !== order.orderNote) handleSetOrderNote(itemOrderNote)
    }, 1000)

    return (
        <li className="flex flex-col py-6">
            <div className="flex items-center justify-between">
                <div className="flex text-white items-center">
                    {loading ? (
                        <div className="bg-white dark:bg-gold w-44 h-44 -mt-20 ml-20 mr-20 rounded-full" />
                    ) : error ? (
                        <div className="bg-white dark:bg-gold w-44 h-44 -mt-20 ml-20 mr-20 rounded-full">
                            {error as string}
                        </div>
                    ) : (
                        <img
                            className="w-16 rounded-full"
                            src={image}
                            alt={order.title}
                        />
                    )}

                    <div className="ml-2 text-white dark:text-dark line-clamp-1">
                        <p>{order.title}</p>
                        <p className="flex text-grayLight text-sm ">
                            $ {order.price}
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <input
                        className="bg-gray dark:bg-lightGold focus:bg-gray text-sm text-center appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-10 h-10 text-white dark:text-dark leading-tight focus:outline-none truncate"
                        placeholder="Qty"
                        value={itemQty ?? ''}
                        onChange={(e) => {
                            if (
                                Number(e.target.value) &&
                                Number(e.target.value) > 0
                            )
                                setItemQty(Number(e.target.value))
                        }}
                        type="text"
                    />
                    <p className="text-white dark:text-dark font-bold p-2">
                        $
                        {Number(order.qty * parseFloat(order.price)).toFixed(2)}
                    </p>
                </div>
            </div>

            <div className="flex mt-2">
                <input
                    className="bg-gray px-2 dark:bg-lightGold focus:bg-gray appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-full h-10 text-white dark:text-dark text-sm leading-tight focus:outline-none truncate"
                    type="text"
                    placeholder="Order Note..."
                    value={itemOrderNote ?? ''}
                    onChange={(e) => setItemOrderNote(e.target.value)}
                />

                <button
                    className="ml-2 text-red border-red font-bold border-2 rounded-md line-clamp-1 text-center justify-center p-2 text-lg"
                    onClick={() => handleDeleteClicked(order.id)}
                >
                    <AiOutlineDelete />
                </button>
            </div>
        </li>
    )
}

export default CartListItems
