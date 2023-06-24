import { useRef, useState } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'

interface Props {
    options: string[]
    selected: (value: string) => void
}

function DropDown({ options, selected }: Props) {
    const [dpDisplay, setDpDisplay] = useState(false)
    const [selectedOp, setSelectedOp] = useState(options[0])
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick(ref, () => {
        setDpDisplay(false)
    })

    return (
        <div
            ref={ref}
            className="inline-flex bg-dark border-[2px] border-gray rounded-lg"
            onClick={() => setDpDisplay(!dpDisplay)}
        >
            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full pl-2 text-white rounded-lg hover:bg-dark"
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
                            'absolute -right-24 z-10 w-44 mt-2 origin-top-right bg-dark border border-gray rounded-lg shadow-lg text-white p-1'
                        }
                    >
                        {options.map((option) => (
                            <div key={option} className="">
                                <a
                                    href=""
                                    className="block px-4 py-2 text-sm rounded-lg hover:bg-gray"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setSelectedOp(option)
                                        selected(option)
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
                className="px-3 py-3 text-white font-bold text-sm rounded-lg"
            >
                {selectedOp}
            </a>
        </div>
    )
}

export default DropDown
