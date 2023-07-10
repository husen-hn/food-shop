import { AiOutlineDelete } from 'react-icons/ai'

function CardItem() {
    return (
        <li className="flex flex-col py-6">
            <div className="flex items-center justify-between">
                <div className="flex text-white items-center">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-2 text-white dark:text-dark">
                        <p>Spicy seasoned ...</p>
                        <p className="text-grayLight text-sm ">$2.29</p>
                    </div>
                </div>
                <div className="flex">
                    <input
                        className="bg-gray dark:bg-lightGold focus:bg-gray text-sm text-center appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-10 h-10 text-white dark:text-dark leading-tight focus:outline-none truncate"
                        placeholder="Qty"
                        type="text"
                    />
                    <p className="text-white dark:text-dark font-bold p-2  ">
                        $4.5
                    </p>
                </div>
            </div>

            <div className="flex mt-2">
                <input
                    className="bg-gray px-2 dark:bg-lightGold focus:bg-gray appearance-none border-[1px] border-gray dark:border-dark dark:border-2  focus:border-red rounded-md w-full h-10 text-white dark:text-dark text-sm leading-tight focus:outline-none truncate"
                    type="text"
                    placeholder="Order Note..."
                />

                <button className="ml-2 text-red border-red font-bold border-2 rounded-md line-clamp-1 text-center justify-center p-2 text-lg">
                    <AiOutlineDelete />
                </button>
            </div>
        </li>
    )
}

export default CardItem
