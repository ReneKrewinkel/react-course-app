import reactLogo from '@/assets/react.svg'
import type { LogoInterface } from './Logo.interface'

const Logo = ({
    'aria-label': ariaLabel,
    className,
    href = '/',
    imageAlt = 'React Course App logo',
    imageSrc = reactLogo,
    size = 'm',
    subtitle = 'Atomic structure for your React training app',
    testID,
    wordmark = 'React Course App',
    ...anchorProps
}: LogoInterface) => {
    const classes = ['Logo', `Logo--${size}`, className].filter(Boolean).join(' ')

    return(
        <a
            { ...anchorProps }
            aria-label={ ariaLabel ?? wordmark }
            className={ classes }
            data-testid={ testID }
            href={ href }
        >
            <img
                alt={ imageAlt }
                className="Logo__image"
                height="48"
                src={ imageSrc }
                width="48"
            />

            <span className="Logo__copy">
                <span className="Logo__wordmark">{ wordmark }</span>
                { subtitle ? <span className="Logo__subtitle">{ subtitle }</span> : null }
            </span>
        </a>
    )
}

export default Logo
