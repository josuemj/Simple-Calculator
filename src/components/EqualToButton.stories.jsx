import EqualToButton from './EqualToButton'
import { fn } from '@storybook/test'

const meta = {
    component: EqualToButton
}

export default meta

export const Default = {
    args: {
        text: '=',
        onClick: fn()
    }
}

