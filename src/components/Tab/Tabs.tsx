import { useCallback } from 'react'
import TabTitle from './TabTitle'

type Props = {
    categories: string[]
    selectedTab: string
    tabSelection: (index: number) => void
}

const Tabs = ({
    categories,
    selectedTab,
    tabSelection
}: Props): JSX.Element => {
    const handleTabSelection = useCallback(
        (index: number) => {
            tabSelection(index)
        },
        [tabSelection]
    )

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
                            setSelectedTab={(index) =>
                                handleTabSelection(index)
                            }
                        />
                    ))}
                </ul>
            </div>
            <hr className="h-px mx-[63px] -mt-3 bg-grayLight border-0" />
        </>
    )
}

export default Tabs
