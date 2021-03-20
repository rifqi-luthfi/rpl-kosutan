import React from 'react'

const Tag = ({children}) => {
    return (
        <div className="border-2 px-2 py-1 rounded-xl">
            <h1 className="text-base font-semibold text-green-dark">{children}</h1>
        </div>
    )
}

export default Tag
