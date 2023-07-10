import { useCallback } from 'react'
import TabFilledTitle from './TabFilledTitle'

type Props = {
    categories: string[]
    selectedTab: string
    tabSelection: (index: number) => void
}

const TabsFilled = ({
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
                <ul className="flex flex-row mx-2 overflow-x-auto">
                    {categories.map((item, index) => (
                        <TabFilledTitle
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
        </>
    )
}

export default TabsFilled
