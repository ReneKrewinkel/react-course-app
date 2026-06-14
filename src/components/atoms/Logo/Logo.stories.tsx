import type { Meta, StoryObj } from '@storybook/react-vite'
import LogoSrc from './Logo'
import { LogoMock } from './Logo.mock'

const LogoMeta: Meta<typeof LogoSrc> = {
    title: "atoms/Logo",
    component: LogoSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof LogoSrc>
export const Logo: Story = {
    args: { ...LogoMock }
}

export default LogoMeta
