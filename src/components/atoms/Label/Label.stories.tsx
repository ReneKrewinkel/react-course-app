import type { Meta, StoryObj } from '@storybook/react-vite'
import LabelSrc from './Label'
import { LabelMock } from './Label.mock'

const LabelMeta: Meta<typeof LabelSrc> = {
    title: "atoms/Label",
    component: LabelSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof LabelSrc>
export const Label: Story = {
    args: { ...LabelMock }
}

export default LabelMeta
