import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { AlertVariant } from '../theme';


import React, { useEffect } from 'react'

const Alert = ({name, variant, open, handleClose, children}) => {
    
    let icon = faCheckCircle
    if (variant === "success") {
        icon = faCheckCircle
    } 
    else if (variant === "danger") {
        icon = faExclamationCircle
    }
    
    const handleOpen = () => {
        if (open) {
            const alert = document.getElementById(name).classList
            alert.remove("-bottom-full")
            alert.add("bottom-0")
        } else {
            const alert = document.getElementById(name).classList
            alert.remove("bottom-0")
            alert.add("-bottom-full")
        }
    }

    useEffect(() => {
        handleOpen()
    })
    
    return (
        <>
            <div id={name} className="fixed z-10 -bottom-full left-4 transition-all duration-500 ease-in-out ">
                <div class={AlertVariant[variant][0]}>
                    <div class="align-center mt-2 ">
                        <FontAwesomeIcon className={AlertVariant[variant][1]} icon={icon}/>
                    </div>
                    <h3 class="text-white tracking-wider flex-1 text-md">
                        {children}  
                    </h3>
                    <FontAwesomeIcon onClick={handleClose} className={AlertVariant[variant][2]} icon={faTimesCircle}/>
                </div>
            </div>

        </>

    )
}

export default Alert
