import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Tag from '../components/Tag'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useParams } from 'react-router'


const dataKost = { 
    nama: "Kost InBandung 78",
    updateAt: "20 March 2021",
    harga: 1700000 
}


const DetailKost = () => {
    const [data, setData] = useState() 
    const [error, setError] = useState("")
    const { id } = useParams()
    const history = useHistory()

    const handleBookNow = () => {
        history.push(`/kosts/book/${id}`)
    }
    const fetchKostData = async () => {
        try {
            const response = await axios.get("/kost/getKostById", {
                params : {
                    id: id
                }
            })
            setData(response.data)
            
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        fetchKostData()

    }, [])

    return (
        
        <>
        {data !== undefined && (
            <div className="container grid grid-cols-1 gap-8 my-32 lg:grid-cols-4 px-6 md:px-6 lg:px-0">
                <img className="" alt="logo" src={process.env.PUBLIC_URL + `/kosts/${data.img}`} />
                <div className="col-span-2 ">
                    <h1 className="text-4xl font-bold text-green-dark">{data.nama_kost}</h1>
                    <div className="flex my-3">
                        <Tag>{data.jenis_kost}</Tag>
                        <span className="p-2"></span>
                        <Tag>{data.nama_kota}</Tag>
                    </div>
                    <hr />
                    <div className="inline-flex gap-3 items-center justify-center my-10">
                        <img alt="icon" src={process.env.PUBLIC_URL + '/icon_fastbooking.svg'}></img>
                        <div>
                            <h1 className="font-bold text-green-dark">Fast Booking</h1>
                            <p>This boarding house can be booked and paid for on the Mamikos website and application, without having to meet with the owner.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="mb-5">
                        <h1 className="font-bold text-green-dark">Alamat Kost</h1>
                        <p className="text-gray-900">{data.alamat_kost}</p>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold text-green-dark">Nama Pemilik</h1>
                        <p className="text-gray-900">{data.nama_awal} {data.nama_akhir}</p>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold text-green-dark">Contact</h1>
                        <p className="text-gray-900">{data.no_hp}</p>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold text-green-dark">Deskripsi</h1>
                        <p className="text-gray-900">{data.deskripsi}</p>
                    </div>
                </div>
                <div className="">
                    <div className="border-2 p-3 bg-gray-100 flex flex-col">
                        <h1 className="text-xl font-semibold mb-3" >Price</h1>
                        <h1 className="text-xl text-green-dark font-bold">
                            Rp {new Intl.NumberFormat(['ban', 'id']).format(data.harga)} 
                            <span className="font-normal">/months</span>
                        </h1>
                        <div className="flex mt-7"  >
                            <Button onClick={handleBookNow} variant="primary" size="lg">Book now</Button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        </>
    )
}

export default DetailKost
