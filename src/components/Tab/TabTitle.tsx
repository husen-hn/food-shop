import { useTabsContext } from '../../context/tabsContext'

export type Props = {
    index: number
}

const TabTitle = ({ index }: Props): JSX.Element => {
    const { categories, selectedTab, tabSelection } = useTabsContext()

    const activeStyle = 'text-red font-bold'
    const normalStyle = 'text-white dark:text-dark'
    return (
        <>
            <li
                className={`${
                    categories[index] === selectedTab
                        ? activeStyle
                        : normalStyle
                } flex  flex-col pb-3 pl-6`}
                key={categories[index] + 'TabTitle'}
            >
                <button
                    onClick={() => tabSelection(index)}
                    className="w-24 line-clamp-1 text-start"
                >
                    {categories[index]}
                </button>
                <div
                    className={`${
                        categories[index] === selectedTab
                            ? 'animate-fade-in-left bg-red'
                            : 'hidden'
                    } mt-3 w-20 h-1  rounded-lg`}
                ></div>
            </li>
        </>
    )
}

export default TabTitle
