import { ReactElement } from 'react'
import { Category } from '../../utils/category'

type Props = {
    title: Category
    children: ReactElement | ReactElement[]
}

const TabPane = ({ title, children }: Props): JSX.Element => (
    <div>{children}</div>
)

export default TabPane
