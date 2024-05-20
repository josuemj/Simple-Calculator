import OperationButton from "./OperationButton";
import { fn } from '@storybook/test'

const meta = {
    component: OperationButton
}

export default meta

export const Default = {
    args: {
        text: 'sss',
        onClick: fn()
    }
}

export const Max1Char = {
    args: {
        text:"1"
    }
}