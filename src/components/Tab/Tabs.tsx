import TabTitle from './TabTitle'
import { useTabsContext } from '../../context/tabsContext'

const Tabs = (): JSX.Element => {
    const { categories, selectedTab, tabSelection } = useTabsContext()

    return (
        <>
            <div className="h-6 my-6 hide-scrollbar scroll-auto">
                <ul className="flex flex-row mx-10 overflow-x-auto">
                    {categories.map((item, index) => (
                        <TabTitle
                            key={item + 'Tabs'}
                            title={item}
                            index={index}
                            isActive={categories[index] === selectedTab}
                            setSelectedTab={(index) => tabSelection(index)}
                        />
                    ))}
                </ul>
            </div>
            <hr className="h-px mx-[63px] -mt-3 bg-grayLight border-0" />
        </>
    )
}

export default Tabs
