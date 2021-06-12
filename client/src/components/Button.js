import React from 'react'
import {ButtonVariant, ButtonSize} from '../theme';


const Button = ({size, variant, outline, children, onClick}) => {

    const classNames = ButtonVariant[variant] + " " + ButtonSize[size]

    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
