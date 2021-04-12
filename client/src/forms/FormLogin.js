import React from 'react'
import Button from '../components/Button'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FieldError from '../components/FieldError'

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is name required'),
    password: Yup.string().required("Password is name required"),
})

const FormLogin = () => {
    return (
        <Formik
            validateOnBlur={false}
            initialValues={{
                username: "", 
                password: ""
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {
                alert(values)
            }}
        >
            {({errors, touched}) => (
                <Form className="">
                    <div className="my-5 text-sm font-semibold">
                        <label for="username" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Username</label>
                        <Field name="username" type="text" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        {errors.username && touched.username ? (
                            <FieldError>{errors.username}</FieldError>
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
    )
}

export default FormLogin
