import { useCallback } from 'react'
import { Category } from '../../utils/category'

export type Props = {
    title: Category
    index: number
    setSelectedTab: (index: number) => void
    isActive?: boolean
}

const TabTitle = ({
    title,
    setSelectedTab,
    index,
    isActive
}: Props): JSX.Element => {
    const handleOnClick = useCallback(() => {
        setSelectedTab(index)
    }, [setSelectedTab, index])

    const activeStyle = 'text-red'
    const normalStyle = 'text-white'
    return (
        <>
            <li
                className={`${
                    isActive ? activeStyle : normalStyle
                } flex  flex-col pb-3 pl-6`}
                key={title + 'TabTitle'}
            >
                <button
                    onClick={handleOnClick}
                    className="w-24 line-clamp-1 text-start"
                >
                    {title}
                </button>
                <div
                    className={`${
                        isActive ? 'animate-fade-in-left bg-red' : 'hidden'
                    } mt-3 w-20 h-1  rounded-lg`}
                ></div>
            </li>
        </>
    )
}

export default TabTitle
