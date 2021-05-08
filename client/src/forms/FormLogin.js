import React, {useState, useContext} from 'react'
import Button from '../components/Button'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FieldError from '../components/FieldError'

import axios from 'axios'
import Alert from '../components/Alert'
import { GlobalContext } from '../context/GlobalContext'

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is name required'),
    password: Yup.string().required("Password is name required"),
})

const FormLogin = () => {

    const [open, setOpen] = useState(false)
    const [error, setError] = useState("")
    const [openDanger, setOpenDanger] = useState(false)
    const { checkUserLoggedIn } = useContext(GlobalContext);

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
            <Alert name="alert-success" variant='success' open={open} handleClose={handleClose}>Successfuly logged in, redirecting to home page</Alert>
            <Alert name="alert-danger" variant='danger' open={openDanger} handleClose={handleCloseDanger}>{error}</Alert>
            <Formik 
                validateOnBlur={false}
                initialValues={{
                    email: "", 
                    password: ""
                }}
                validationSchema={LoginSchema}
                onSubmit={async values => {
                    const user = {
                        email: values.email, 
                        password: values.password
                    }
                    try {
                        const response = await axios.post("/penyewa/login", user)
                        if (response.status === 200) {
                            handleOpen()
                            await checkUserLoggedIn()
                            setTimeout(() => {
                                handleClose()
                            }, 2500);
                        } else {
                            setError(error.response.data.msg)
                            handleOpenDanger()
                            setTimeout(() => {
                                handleCloseDanger()
                            }, 2500)
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
                    <Form className="">
                        <div className="my-5 text-sm font-semibold">
                            <label for="email" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Email</label>
                            <Field name="email" type="text" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                            {errors.email && touched.email ? (
                                <FieldError>{errors.email}</FieldError>
                            ): null}
                        </div>
                        <div className="my-5 text-sm font-semibold">
                            <label for="password" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Password</label>
                            <Field name="password" type="password" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                            {errors.password && touched.password ? (
                                <FieldError>{errors.password}</FieldError>
                            ): null}
                            <div className="flex justify-end mt-2 text-xs text-gray-600">
                                <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
                            </div>
                        </div>

                        <div className='flex'>
                            <Button className="" variant="primary" size="lg">Login</Button>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

export default FormLogin
