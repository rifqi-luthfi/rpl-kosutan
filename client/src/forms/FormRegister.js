import React, { useState } from 'react'
import Button from '../components/Button'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FieldError from '../components/FieldError'

import axios from 'axios'
import Alert from '../components/Alert'
import { useHistory } from "react-router";

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First is name required'),
    lastName: Yup.string().required("Last is name required"),
    email: Yup.string().email('Invalid email').required("Email is required"),
    password: Yup.string().required("Password is required").min(5, "Passowrd must atleast 5 charaters long"),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not must match'),
    phoneNumber: Yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid')
})

const FormRegister = () => {

    const [open, setOpen] = useState(false)
    const [openDanger, setOpenDanger] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpenDanger = () => {
        setOpenDanger(true)
    }
    const handleCloseDanger = () => {
        setOpenDanger(false)
    }


    return (
        <>
            <Alert name="alert-success" variant='success' open={open} handleClose={handleClose}>Successfuly Registered, redirecting to login page</Alert>
            <Alert name="alert-danger" variant='danger' open={openDanger} handleClose={handleCloseDanger}>{error}</Alert>
            <Formik
                validateOnBlur={false}
                initialValues={{
                    firstName: "", 
                    lastName: "",
                    email: "", 
                    password: "", 
                    passwordConfirmation: "",
                    phoneNumber: ""
                }}
                validationSchema={SignupSchema}
                onSubmit={async values => {
                    const user = {
                        nama_awal: values.firstName, 
                        nama_akhir: values.lastName, 
                        email: values.email, 
                        password: values.password, 
                        password_confirmation: values.passwordConfirmation,
                        no_hp: values.phoneNumber
                        
                    }
                    try {
                        const response = await axios.post("/penyewa/register", user)
                        console.log(response)
                        if (response.status === 200) {
                            handleOpen()
                            setTimeout(() => {
                                handleClose()
                                history.push("/home")
                            }, 3000);
                        } else {
                            setError(error.response.data.msg)
                            handleOpenDanger()
                            setTimeout(() => {
                                handleCloseDanger()
                            }, 2500);
                        }
                    } catch (error) {
                        console.log(error.response.data.msg)
                        setError(error.response.data.msg)
                        handleOpenDanger()
                        setTimeout(() => {
                            handleCloseDanger()
                        }, 2500)
                    }
                }}
            >
                {({errors, touched}) => (
                    <Form className='flex-col flex-wrap my-5'>
                        <div className='flex gap-3 flex-wrap font-semibold'>
                            <div className="flex-auto">
                                <label for="first-name" className="block -mb-3 text-lg text-green-dark font-semibold text-left">First Name</label>
                                <Field name="firstName" type="text" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2" />
                                {errors.firstName && touched.firstName ? (
                                    <FieldError>{errors.firstName}</FieldError>
                                ): null}
                            </div>
                            <div className="flex-auto font-semibold">
                                <label for="last-name" className="block -mb-3 text-lg text-green-dark font-semibold text-left">Last Name</label>
                                <Field name="lastName" type="text" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"  />
                                {errors.lastName && touched.lastName ? (
                                    <FieldError>{errors.lastName}</FieldError>
                                ) : null}
                            </div>
                        </div>
                        <div className="mt-3 font-semibold">
                            <label for="email" className="block -mb-3 text-lg text-green-dark text-left">Email</label>
                            <Field name="email" type="email" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2" />
                            {errors.email && touched.email ? (
                                <FieldError>{errors.email}</FieldError>
                            ) : null}
                        </div>
                        <div className="mt-3 font-semibold">
                            <label for="password" className="block -mb-3 text-lg text-green-dark text-left">Password</label>
                            <Field name="password" type="password" autofocus id="password" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2" />
                            {errors.password && touched.password ? (
                                <FieldError>{errors.password}</FieldError>
                            ) : null}
                        </div>
                        <div className="mt-3 font-semibold">
                            <label for="confirm-password" className="block -mb-3 text-lg text-green-dark text-left">Confirm Password</label>
                            <Field name="passwordConfirmation" type="password" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                            {errors.passwordConfirmation && touched.passwordConfirmation ? (
                                <FieldError>{errors.passwordConfirmation}</FieldError>
                            ) : null}
                        </div>
                        <div className="mt-3 font-semibold">
                            <label for="phone-number" className="block -mb-3 text-lg text-green-dark text-left">Phone Number</label>
                            <Field name="phoneNumber" type="tel" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                            {errors.phoneNumber && touched.phoneNumber ? (
                                <FieldError>{errors.phoneNumber}</FieldError>
                            ) : null}
                        </div>
                        <div className="flex mt-6 flex-col md:flex-row text-lg">
                            <Button type="submit"  variant="primary" size="lg">Sign up</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FormRegister
