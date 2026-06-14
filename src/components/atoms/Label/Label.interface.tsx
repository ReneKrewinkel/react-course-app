import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface LabelInterface extends Omit<ComponentPropsWithoutRef<'label'>, 'children'> {
    helperText?: string,
    required?: boolean,
    size?: 's' | 'm' | 'l',
    testID?: string,
    text: ReactNode,
}
