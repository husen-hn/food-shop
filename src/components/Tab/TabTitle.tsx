import { useCallback } from 'react'

export type Props = {
    title: string
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

    const activeStyle = 'text-red font-bold'
    const normalStyle = 'text-white dark:text-dark'
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
