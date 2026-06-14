import type { LabelInterface } from './Label.interface'

const Label = ({
    className,
    helperText,
    required = false,
    size = 'm',
    testID,
    text,
    ...labelProps
}: LabelInterface) => {
    const classes = ['Label', `Label--${size}`, className].filter(Boolean).join(' ')

    return(
        <label
            { ...labelProps }
            className={ classes }
            data-testid={ testID }
        >
            <span className="Label__text">
                <span>{ text }</span>
                { required ? <span aria-hidden="true" className="Label__required"> *</span> : null }
            </span>
            { helperText ? <span className="Label__helperText">{ helperText }</span> : null }
        </label>
    )
}

export default Label
