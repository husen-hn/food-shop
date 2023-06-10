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
        <div className="m-6">
            <ul className="flex flex-wrap mx-10">
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
    )
}

export default Tabs
