import type { ComponentPropsWithoutRef } from 'react'

export interface LogoInterface extends Omit<ComponentPropsWithoutRef<'a'>, 'children'> {
    imageAlt?: string,
    imageSrc?: string,
    size?: 's' | 'm' | 'l',
    subtitle?: string,
    testID?: string,
    wordmark?: string,
}
