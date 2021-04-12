import React from 'react'
import Button from '../components/Button'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FieldError from '../components/FieldError'

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First is name required'),
    lastName: Yup.string().required("Last is name required"),
    email: Yup.string().email('Invalid email').required("Email is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not must match')
})

const FormRegister = () => {
    return (
        <Formik
            validateOnBlur={false}
            initialValues={{
                firstName: "", 
                lastName: "",
                email: "", 
                password: "", 
                passwordConfirmation: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                alert(values.lastName)
            }}
        >
            {({errors, touched}) => (
                <Form className='flex-col flex-wrap my-5 '>
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
                    <div className="flex mt-6 flex-col md:flex-row text-lg">
                        <Button type="submit" variant="primary" size="lg">Sign up</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FormRegister
