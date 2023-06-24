import { ReactElement, useCallback, useState } from 'react'
import TabTitle, { Props as TabTitleProps } from './TabTitle'

type Props = {
    children: ReactElement<TabTitleProps>[]
    preSelectedTabIndex?: number
    tabSelection: () => void
}

const Tabs = ({
    children,
    preSelectedTabIndex,
    tabSelection
}: Props): JSX.Element => {
    // First tab is shown by default
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
        preSelectedTabIndex || 0
    )

    const handleTabSelection = useCallback(() => {
        tabSelection()
    }, [tabSelection])

    return (
        <>
            <div className="h-6 my-6 hide-scrollbar">
                <ul className="flex flex-row mx-10 overflow-x-auto">
                    {children.map((item, index) => (
                        <TabTitle
                            key={item.props.title + 'Tabs'}
                            title={item.props.title}
                            index={index}
                            isActive={index === selectedTabIndex}
                            setSelectedTab={(index) => {
                                setSelectedTabIndex(index)
                                handleTabSelection()
                            }}
                        />
                    ))}
                </ul>

                {/* show selcted tab by index*/}
                {children[selectedTabIndex]}
            </div>
            <hr className="h-px mx-[52px] -mt-3 bg-grayLight border-0" />
        </>
    )
}

export default Tabs
