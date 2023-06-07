import { ReactElement, useState } from 'react'
import TabTitle, { Props as TabTitleProps } from './TabTitle'

type Props = {
    children: ReactElement<TabTitleProps>[]
    preSelectedTabIndex?: number
}

const Tabs = ({ children, preSelectedTabIndex }: Props): JSX.Element => {
    // First tab is shown by default
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
        preSelectedTabIndex || 0
    )

    return (
        <div className="m-6">
            <ul className="flex flex-wrap mx-10">
                {children.map((item, index) => (
                    <TabTitle
                        key={item.props.title}
                        title={item.props.title}
                        index={index}
                        isActive={index === selectedTabIndex}
                        setSelectedTab={setSelectedTabIndex}
                    />
                ))}
            </ul>

            {/* show selcted tab by index*/}
            {children[selectedTabIndex]}
        </div>
    )
}

export default Tabs
