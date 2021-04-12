import React from 'react'
import {ButtonVariant, ButtonSize} from '../theme';


const Button = ({size, variant, outline, children}) => {

    const classNames = ButtonVariant[variant] + " " + ButtonSize[size]

    return (
        <button className={classNames}>
            {children}
        </button>
    )
}

export default Button
