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

    const activeStyle = 'text-red border-red'
    const normalStyle = 'text-white border-gray'
    return (
        <>
            <li
                className={`${
                    isActive ? activeStyle : normalStyle
                } font-bold flex flex-col pb-3 pr-10 pl-3 border-solid border-4 border-t-0 border-l-0 border-r-0 `}
            >
                <button onClick={handleOnClick}>{title}</button>
            </li>
        </>
    )
}

export default TabTitle
