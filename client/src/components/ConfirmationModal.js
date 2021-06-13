import React from 'react'
import Button from '../components/Button'


const ConfirmationModal = ({ show, setShow, message, onCancel, onContinue }) => {

    return (
        <>
        {
            show && (
                <div  class="transition-all bg-gray-900 z-40 bg-opacity-80 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0  outline-none focus:outline-none">
                    <div className="text-center w-full z-50 max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white items-center justify-items-center flex flex-col ">
                        <h1 className="font-bold text-green-dark text-2xl mb-3">Confirmation</h1>
                        <p className="my-5">{message}</p>
                        <div className="flex gap-3">
                            <Button onClick={() => setShow(false) } variant="danger" size='lg'>Cancel</Button>
                            <Button onClick={onContinue} variant="primary" size='lg'>Continue</Button>
                        </div>
                    </div>
                </div>

            )
        }
        </>
    )
}

export default ConfirmationModal

