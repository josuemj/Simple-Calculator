import OperationButton from "./OperationButton";
import { fn } from '@storybook/test'

const meta = {
    component: OperationButton
}

export default meta

export const Default = {
    args: {
        text: '1',
        onClick: fn()
    }
}

