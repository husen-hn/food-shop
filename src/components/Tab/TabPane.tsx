import { ReactElement } from 'react'
import { Category } from '../../utils/category'

type Props = {
    title: Category
    children: ReactElement | ReactElement[]
}

const TabPane = ({ children }: Props): JSX.Element => <div>{children}</div>

export default TabPane
