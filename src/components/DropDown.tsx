import { useCallback, useRef, useState } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'

interface Props {
    options: string[]
    selectedItem: (value: string) => void
    item: string
}

function DropDown({ options, selectedItem, item }: Props) {
    const handleSelectedChange = useCallback(
        (option: string) => {
            selectedItem(option)
        },
        [selectedItem]
    )

    const [dpDisplay, setDpDisplay] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick(ref, () => {
        setDpDisplay(false)
    })

    return (
        <div
            ref={ref}
            className="inline-flex bg-dark dark:bg-gold border-[2px] border-gray dark:border-dark rounded-lg"
            onClick={() => setDpDisplay(!dpDisplay)}
        >
            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full pl-2 text-white dark:text-dark rounded-lg hover:bg-dark dark:hover:bg-gold"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {dpDisplay ? (
                    <div
                        className={
                            'absolute -right-24 z-10 w-44 mt-2 origin-top-right bg-dark dark:bg-gold border-2 border-gray rounded-lg shadow-lg text-white dark:text-dark p-1'
                        }
                    >
                        {options.map((option) => (
                            <div key={option} className="">
                                <a
                                    href=""
                                    className="block px-4 py-2 text-sm rounded-lg hover:bg-gray dark:hover:bg-darkGold"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSelectedChange(option)
                                    }}
                                >
                                    {option}
                                </a>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
            <a
                href="#"
                className="px-3 py-3 text-white dark:text-dark font-bold text-sm rounded-lg"
            >
                {/* {selected} */}
                {item}
            </a>
        </div>
    )
}

export default DropDown
