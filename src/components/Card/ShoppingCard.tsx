import { useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import TabsFilled from '../TabFilled/TabsFilled'

import { TiDeleteOutline } from 'react-icons/ti'
import CardItem from './CardItem'

function ShoppingCard() {
    const [cardDisplay, setCardDisplay] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick(ref, () => {
        setCardDisplay(false)
    })

    return (
        <div
            // ref={ref}
            className="relative"
            onClick={() => setCardDisplay(!cardDisplay)}
        >
            {cardDisplay ? (
                <div className="fixed inset-0 backdrop-blur-sm z-10">
                    <div
                        className="bg-dark w-1/3 h-full absolute right-0 overflow-y-scroll flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* header */}
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
                            <div className="flex justify-between">
                                <h2
                                    className="flex items-start text-lg font-medium text-white dark:text-dark"
                                    id="slide-over-title"
                                >
                                    Orders #3654321
                                </h2>
                                <button
                                    className="text-3xl text-white dark:text-dark"
                                    onClick={() => setCardDisplay(false)}
                                >
                                    <TiDeleteOutline />
                                </button>
                            </div>
                            {/* Tabs */}
                            <TabsFilled
                                categories={['Dine In', 'To Go', 'Delivery']}
                                selectedTab={'Dine In'}
                                tabSelection={(index: number) => {
                                    index.toString()
                                }}
                            />
                            {/* Body - card items */}
                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul
                                        role="list"
                                        className="-my-6 divide-y divide-gray-200"
                                    >
                                        <CardItem />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-sm font-medium ">
                                <p className="text-grayLight">Discount</p>
                                <p className="text-white dark:text-dark">$0</p>
                            </div>
                            <div className="flex justify-between  text-sm font-medium ">
                                <p className="text-grayLight">Sub total</p>
                                <p className="text-white dark:text-dark">
                                    $21,03
                                </p>
                            </div>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-red px-6 py-3 text-base font-medium text-white shadow-[0_35px_60px_-15px_rgba(234,125,105,0.6)] hover:opacity-90 dark:border-gray dark:border-2"
                                >
                                    Continue to Payment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            <button className="releative inline-flex h-full ml-1 pl-2 bg-dark dark:bg-gold text-xl text-white dark:text-dark p-2 py-[11px] border-2 border-gray rounded-md">
                <div className="w-5 h-5 bg-red text-dark rounded-full text-sm absolute -top-2 -right-1 text-center">
                    0
                </div>
                <AiOutlineShoppingCart />
            </button>
        </div>
    )
}

export default ShoppingCard
