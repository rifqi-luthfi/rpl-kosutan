import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Tag from '../components/Tag'
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
    console.log(data)
    const fetchKostData = async () => {
        try {
            const response = await axios.get("/kost/getKostById", {
                params : {
                    id: id
                }
            })
            setData(response.data)
            
        } catch (error) {
            setError(error.data.msg)
        }
    }
    useEffect(() => {
        fetchKostData()

    }, [])
    return (
        
        <>
        {data !== undefined && (
            <div className="">
                <img className="" alt="logo" src={process.env.PUBLIC_URL + `/kosts/${data.img}`} />
                <div className="">
                    <h1 className="text-4xl font-bold text-green-dark">{data.nama_kost}</h1>
                    <div className="flex my-3">
                        <Tag>{data.jenis_kost}</Tag>
                        <span className="p-2"></span>
                        <Tag>{data.nama_kota}</Tag>
                    </div>
                    <div className=""></div>
                    <div className="">
                        <img alt="icon" src={process.env.PUBLIC_URL + '/icon_fastbooking.svg'}></img>
                        <div className='flex'>
                            <h1>Fast Booking</h1>
                            <h1>{data.deskripsi}</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="" >Price</h1>
                    <h1 className="" >
                        Rp {new Intl.NumberFormat(['ban', 'id']).format(dataKost.harga)} 
                        <span className="">/months</span>
                    </h1>
                    <div className="" >
                        <Button type="primary" size="sm" >Book now</Button>

                    </div>
                </div>
            </div>
        )}

        </>
    )
}

export default DetailKost
