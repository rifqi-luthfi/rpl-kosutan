import React, { useState } from 'react'
import Button from '../components/Button'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FieldError from '../components/FieldError'
import axios from 'axios'
import Alert from '../components/Alert'
import { useHistory } from 'react-router-dom'

const PostKostSchema = Yup.object().shape({
    nama: Yup.string().required('nama is required'),
    alamat: Yup.string().required("alamat is required"),
    kota: Yup.number().required("kota is required").notOneOf([0], 'kota is required'),
    jenis_kost: Yup.string().required("jenis is required"),
    deskripsi: Yup.string().required("deskripsi is required"),
    harga: Yup.string().required("deskripsi is required"),
    img: Yup.string().required("image is required"),
})

const FormPostKost = () => {
    const [error, setError] = useState()
    const [open, setOpen] = useState(false)
    const [openDanger, setOpenDanger] = useState(false)
    const history = useHistory()
    return (
        <>
            
            <Formik
                validateOnBlur={false}
                initialValues={{
                    nama: "", 
                    alamat: "",
                    kota: 0,
                    jenis_kost:"",
                    deskripsi:"",
                    harga:"",
                    img: ""
                }}
                validationSchema={PostKostSchema}
                onSubmit={async values => {
                try {
                        const data = new FormData()
                        data.append('file', values.img)
                        const responsePhoto = await axios.post("/kost/addKostPhoto", data)
                        const dataKost = {
                            nama: values.nama, 
                            alamat: values.alamat,
                            kota: values.kota, 
                            jenis_kost: values.jenis_kost, 
                            deskripsi: values.deskripsi,
                            harga: values.harga, 
                            img: responsePhoto.data.filename
                        }
                        await axios.post("/kost/addKostData", dataKost)
                        setOpen(true)
                        setTimeout(() => {
                            setOpen(false)
                            history.push("/dashboard")
                        }, 2500);
                    
                } catch (error) {
                    setError(error.response.data.msg)
                    setOpenDanger(true)
                    setTimeout(() => {
                        setOpenDanger(false)
                    }, 2500);
                }
                }}
            >
                {({errors, touched, setFieldValue, handleChange, values}) => (
                    <Form className="">
                        <div className="my-5 text-sm font-semibold">
                            <label for="nama" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Nama</label>
                            <Field name="nama" type="text" autofocus className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                            {errors.nama && touched.nama ? (
                                <FieldError>{errors.nama}</FieldError>
                            ): null}
                        </div>
                        <div className="my-5 text-sm font-semibold">
                            <label for="file" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Kost Image</label>
                            <input name="img" type="file" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2" onChange={(event) => {setFieldValue("img", event.currentTarget.files[0]);}}  />
                            {errors.img && touched.img ? (
                                <FieldError>{errors.img}</FieldError>
                            ): null}
                        </div>

                        <div className="my-5 text-sm font-semibold">
                            <label for="kota" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Kota</label>
                            <select
                                name="kota"
                                style={{ display: "block" }}
                                className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"
                                onChange={handleChange}
                                value={values.kota}
                            >
                            <option value={0}></option>
                            <option value={1}>Bandung</option>
                            <option value={2}>Jakarta Selatan</option>
                            <option value={3}>Yogyakarta</option>
                            <option value={4}>Surabaya</option>
                            <option value={5}>Semarang</option>
                            </select>
                            {errors.kota && touched.kota ? (
                                <FieldError>{errors.kota}</FieldError>
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
            <Alert name="alert-success" variant='success' open={open} handleClose={() => setOpen(false)}>Kost successfuly added!</Alert>
            <Alert name="alert-danger" variant='danger' open={openDanger} handleClose={() => setOpenDanger(false)}>{error}</Alert>
        </>
    )
}

export default FormPostKost
