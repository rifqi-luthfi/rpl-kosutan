import React from 'react'
import Button from '../components/Button'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FieldError from '../components/FieldError'

const PostKostSchema = Yup.object().shape({
    nama: Yup.string().required('nama is required'),
    alamat: Yup.string().required("alamat is required"),
    kota: Yup.string().required("kota is required"),
    jenis_kost: Yup.string().required("jenis is required"),
    deskripsi: Yup.string().required("deskripsi is required"),
    harga: Yup.string().required("deskripsi is required"),
})

const FormPostKost = () => {
    return (
        <Formik
            validateOnBlur={false}
            initialValues={{
                nama: "", 
                alamat: "",
                kota:"",
                jenis_kost:"",
                deskripsi:"",
                harga:""
            }}
            validationSchema={PostKostSchema}
            onSubmit={values => {
                alert(values)
            }}
        >
            {({errors, touched}) => (
                <Form className="">
                    <div className="my-5 text-sm font-semibold">
                        <label for="username" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Nama</label>
                        <Field name="username" type="text" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        {errors.nama && touched.nama ? (
                            <FieldError>{errors.nama}</FieldError>
                        ): null}
                    </div>
                    <div className="my-5 text-sm font-semibold">
                        <label for="alamat" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Alamat</label>
                        <Field name="alamat" type="text" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        {errors.alamat && touched.alamat ? (
                            <FieldError>{errors.alamat}</FieldError>
                        ): null}
                    </div>
                    <div className="my-5 text-sm font-semibold">
                        <label for="kota" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Kota</label>
                        <Field name="kota" type="text" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        {errors.kota && touched.kota ? (
                            <FieldError>{errors.kota}</FieldError>
                        ): null}
                    </div>
                    <div className="my-5 text-sm font-semibold">
                        <label for="jenis_kost" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Jenis Kost</label>
                        <Field name="jenis_kost" type="text" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        {errors.jenis_kost && touched.jenis_kost ? (
                            <FieldError>{errors.jenis_kost}</FieldError>
                        ): null}
                    </div>
                    <div className="my-5 text-sm font-semibold">
                        <label for="deskripsi" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Deskripsi</label>
                        <Field name="deskripsi" type="text" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        {errors.deskripsi && touched.deskripsi ? (
                            <FieldError>{errors.deskripsi}</FieldError>
                        ): null}
                    </div>
                    <div className="my-5 text-sm font-semibold">
                        <label for="harga" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Harga</label>
                        <Field name="harga" type="number" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        {errors.harga && touched.harga ? (
                            <FieldError>{errors.harga}</FieldError>
                        ): null}
                    </div>

                    <div className='flex'>
                        <Button className="" variant="primary" size="lg">Post Kost-an</Button>
                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default FormPostKost
