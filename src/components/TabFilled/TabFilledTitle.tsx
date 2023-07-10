import { useCallback } from 'react'

export type Props = {
    title: string
    index: number
    setSelectedTab: (index: number) => void
    isActive?: boolean
}

const TabFilledTitle = ({
    title,
    setSelectedTab,
    index,
    isActive
}: Props): JSX.Element => {
    const handleOnClick = useCallback(() => {
        setSelectedTab(index)
    }, [setSelectedTab, index])

    const activeStyle = 'text-white bg-red border-red'
    const normalStyle = 'text-red border-gray'
    return (
        <>
            <li className={`flex flex-col ml-2`} key={title + 'TabTitle'}>
                <button
                    onClick={handleOnClick}
                    className={`${
                        isActive ? activeStyle : normalStyle
                    } font-bold border-2 rounded-md w-24 line-clamp-1 text-center justify-center p-2 text-sm`}
                >
                    {title}
                </button>
            </li>
        </>
    )
}

export default TabFilledTitle
