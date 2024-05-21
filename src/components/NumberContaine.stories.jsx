import NumberContainer from './NumberContainer'
import { fn } from '@storybook/test'

const meta = {
    component: NumberContainer
}

export default meta

export const Default = {
    args: {
        text: '2',
        onClick: fn()
    }
}

