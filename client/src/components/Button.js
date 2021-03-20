import React from 'react'
import {ButtonType, ButtonSize} from '../theme';


const Button = ({size, type, outline, children}) => {

    const classNames = ButtonType[type] + " " + ButtonSize[size]

    return (
        <button className={classNames}>
            {children}
        </button>
    )
}

export default Button
