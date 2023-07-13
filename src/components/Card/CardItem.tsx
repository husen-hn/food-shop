import { AiOutlineDelete } from 'react-icons/ai'
import { FData } from '../../hooks/useData'

interface Props {
    item: FData
    qty: number
    setQty: (value: string, id: number) => void
    orderNote: string
    setOrderNote: (value: string, id: number) => void
}

function CardItem({ item, qty, setQty, orderNote, setOrderNote }: Props) {
    return (
        <li className="flex flex-col py-6">
            <div className="flex items-center justify-between">
                <div className="flex text-white items-center">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-2 text-white dark:text-dark">
                        <p>{item.title}</p>
                        <p className="text-grayLight text-sm ">
                            $ {item.price}
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <input
                        className="bg-gray dark:bg-lightGold focus:bg-gray text-sm text-center appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-10 h-10 text-white dark:text-dark leading-tight focus:outline-none truncate"
                        placeholder="Qty"
                        value={qty ?? ''}
                        onChange={(e) => setQty(e.target.value, item.id)}
                        type="text"
                    />
                    <p className="text-white dark:text-dark font-bold p-2  ">
                        $ {qty * parseFloat(item.price)}
                    </p>
                </div>
            </div>

            <div className="flex mt-2">
                <input
                    className="bg-gray px-2 dark:bg-lightGold focus:bg-gray appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-full h-10 text-white dark:text-dark text-sm leading-tight focus:outline-none truncate"
                    type="text"
                    placeholder="Order Note..."
                    value={orderNote ?? ''}
                    onChange={(e) => setOrderNote(e.target.value, item.id)}
                />

                <button className="ml-2 text-red border-red font-bold border-2 rounded-md line-clamp-1 text-center justify-center p-2 text-lg">
                    <AiOutlineDelete />
                </button>
            </div>
        </li>
    )
}

export default CardItem
