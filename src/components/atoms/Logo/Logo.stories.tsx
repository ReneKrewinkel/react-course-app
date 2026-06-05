// import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import LogoSrc from './Logo'
// import type { LogoInterface } from './Logo.interface'
import { LogoMock } from './Logo.mock'

/// TODO: Adapt Stories for Logo
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
