import React, { useState } from 'react'
import Button from '../Button'
import { RadioGroup, Radio } from 'react-radio-group'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Alert from '../Alert'


const InputRekening = () => {
    const [radioValue, setRadioValue] = useState("")
    const [inputValue, setInputValue] = useState("")
    const [open, setOpen] = useState(false)
    const [openDanger, setOpenDanger] = useState(false)
    const history = useHistory()
    const handleRadio = (value) => {
        setRadioValue(value)
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const data = {
                id_bank: radioValue,
                no_rek: inputValue
            }
            await axios.post("/rekening/postRekening", data)
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
                history.go(0)
            }, 2500);
            
        } catch (error) {
            setOpenDanger(true)
            setTimeout(() => {
                setOpenDanger(false)
            }, 2500);
        }
    }

    return (
        <>
            <Alert name="alert-success" variant='success' open={open} handleClose={() => setOpen(false)}>Rekening successfuly added</Alert>
            <Alert name="alert-danger" variant='danger' open={openDanger} handleClose={() => setOpenDanger(false)}>Error occured</Alert>
            <form onSubmit={handleSubmit}>
                <RadioGroup
                    className="mt-3"
                    name="fruit"
                    selectedValue={radioValue}
                    onChange={handleRadio}>
                        <div  lassName="inline-flex gap-5 items-center">
                            <Radio value={1}/>
                            <label className="text-gray-500">Bank Mandiri</label>
                        </div> <br/>
                        <div  lassName="inline-flex gap-5 items-center">
                            <Radio value={2}/>
                            <label className="text-gray-500">Bank BCA</label>
                        </div> <br/>
                        <div  lassName="inline-flex gap-5 items-center">
                            <Radio value={3}/>
                            <label className="text-gray-500">Bank BRI</label>
                        </div> <br/>
                </RadioGroup>
                <input value={inputValue} onChange={handleInputChange} className="p-3 my-3 border-green-dark border" placeholder="Nomor rekening"></input> <br />
                <button type="submit" className="py-3 px-6 focus:outline-none bg-green text-white font-semibold rounded-md hover:bg-green-dark transition duration-300 ease-in-out flex-auto">Add Rekening</button>
            </form>
        </>
    )
}

export default InputRekening
