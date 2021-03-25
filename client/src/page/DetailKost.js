import React from 'react'
import Button from '../components/Button'
import Tag from '../components/Tag'
import Header from '../layout/Header'

const dataKost = { 
    nama: "Kost InBandung 78",
    updateAt: "20 March 2021",
    harga: 1700000 
}

const DetailKost = () => {
    return (
        <>
            <Header />
            <div className="container flex flex-wrap justify-between md:flex-nowrap mx-auto my-12 px-12 lg:px-0 md:px-6 lg:my-32">
                <img className="w-full mb-6 mr-6 " alt="logo" src={process.env.PUBLIC_URL + '/detail_1.png'} />
                <div className=" mb-6 mr-6">
                    <h1 className="text-4xl font-bold text-green-dark">{dataKost.nama}</h1>
                    <div className="flex my-3">
                        <Tag>For male</Tag>
                        <span className="p-2"></span>
                        <Tag>Bandung</Tag>
                    </div>
                    <h1 className="text-sm font-medium text-gray-500">Last update {dataKost.updateAt}</h1>
                    <div className="my-6 bg-green-dark md:block hidden h-1"></div>
                    <div className="flex-1 flex items-center">
                        <img alt="icon" src={process.env.PUBLIC_URL + '/icon_fastbooking.svg'}></img>
                        <div className='flex'>
                            <h1>Fast Booking</h1>
                            <h1>This boarding house can be booked and paid for on the Mamikos website and application, without having to meet with the owner.</h1>
                        </div>
                    </div>
                </div>
                <div className="flex-1 mb-6 h-52 w-auto border-2 rounded-xl px-6 py-12 flex flex-col justify-center bg-white">
                    <h1 className="text-2xl font-semibold text-green-dark" >Price</h1>
                    <h1 className="text-2xl font-bold text-green-dark" >
                        Rp {new Intl.NumberFormat(['ban', 'id']).format(dataKost.harga)} 
                        <span className="font-normal text-xl ml-3 text-gray-500">/months</span>
                    </h1>
                    <div className="flex mt-6" >
                        <Button type="primary" size="sm" >Book now</Button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailKost
