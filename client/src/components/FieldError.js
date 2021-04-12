import React from 'react'

const FieldError = ({children}) => {
    return (
        <p className="text-red-500">
            {children} 
        </p>
    )
}

export default FieldError
