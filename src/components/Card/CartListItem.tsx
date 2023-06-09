import { AiOutlineDelete } from 'react-icons/ai'
import { FData } from '../../hooks/useData'
import { useCallback } from 'react'

interface Props {
    order: FData
    deleteClicked: (id: number) => void
    setOrderQty: (value: number, id: number) => void
    setOrderNote: (value: string, id: number) => void
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
        (value: number, id: number) => {
            setOrderQty(value, id)
        },
        [setOrderQty]
    )
    const handleSetOrderNote = useCallback(
        (value: string, id: number) => {
            setOrderNote(value, id)
        },
        [setOrderNote]
    )

    return (
        <li className="flex flex-col py-6">
            <div className="flex items-center justify-between">
                <div className="flex text-white items-center">
                    <img
                        src={order.image}
                        alt={order.title}
                        className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-2 text-white dark:text-dark">
                        <p>{order.title}</p>
                        <p className="text-grayLight text-sm ">
                            $ {order.price}
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <input
                        className="bg-gray dark:bg-lightGold focus:bg-gray text-sm text-center appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-10 h-10 text-white dark:text-dark leading-tight focus:outline-none truncate"
                        placeholder="Qty"
                        value={order.qty ?? ''}
                        onChange={(e) =>
                            handleSetOrderQty(
                                parseInt(e.target.value),
                                order.id
                            )
                        }
                        type="text"
                    />
                    <p className="text-white dark:text-dark font-bold p-2  ">
                        $ {order.qty * parseFloat(order.price)}
                    </p>
                </div>
            </div>

            <div className="flex mt-2">
                <input
                    className="bg-gray px-2 dark:bg-lightGold focus:bg-gray appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-full h-10 text-white dark:text-dark text-sm leading-tight focus:outline-none truncate"
                    type="text"
                    placeholder="Order Note..."
                    value={order.orderNote ?? ''}
                    onChange={(e) =>
                        handleSetOrderNote(e.target.value, order.id)
                    }
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
