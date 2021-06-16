import React, { useEffect, useState, useContext } from 'react'
import PemilikTable from '../../components/admin/PemilikTable'
import axios from "axios";
import BookRequestTable from '../../components/admin/BookRequestTable';
const Dashboard = () => {
    const [kosts, setKosts] = useState([{}])
    const [books, setBooks] = useState([{}])
    const [error, setError] = useState()
    const [show, setShow] = useState(true)
    const [tab, setTab] = useState(0)
    
    const fetchKostData = async () => {
        try {
            const kostsResponse = await axios.get("/kost/getUserKost")
            let data = []
            kostsResponse.data.forEach(element => {
                const obj = {
                    id_kost: element.id_kost, 
                    nama_kost: element.nama_kost, 
                    alamat_kost: element.alamat_kost,
                    harga: element.harga,
                    jenis_kost: element.jenis_kost
                    
                }
                data.push(obj)
            });
    
            setKosts(data)
        } catch (error) {
            setError(error)
        }
    }
    const fetchBookRequests = async () => {
        try {
            const bookResponse = await axios.get("/pembayaran/getPemilikBookRequests")
            setBooks(bookResponse.data)
            
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchBookRequests()
        fetchKostData()
    }, [kosts, books])
    return (
        <>
           <div className="container my-32 z-50">
                <content className="container mx-auto flex flex-col px-6 md:px-6 lg:px-0">
                    <h1 className="text-green-dark text-4xl font-bold tracking-tighter mb-4">
                        Manage Kosts
                    </h1>
                    <h1 className="mb-8 font-medium text-lg text-green-dark">
                        Yuk! urus kostan mu dan temukan inspirasi dan ikut berbagi momen di Ruang #NyamannyaKamu
                    </h1>

                    <div className="flex gap-5 mb-5">
                        <h1 onClick={() => setTab(0)} className={`text-xl py-3 border-b-2 h-full cursor-pointer ${tab === 0 ? 'text-green-dark font-bold border-green-dark' : 'text-gray-300 font-medium border-gray-300'}`}>Your Kost</h1>
                        <h1 onClick={() => setTab(1)} className={`text-xl py-3 border-b-2 h-full cursor-pointer ${tab === 1 ? 'text-green-dark font-bold border-green-dark' : 'text-gray-300 font-medium border-gray-300'}`}>Book Requests</h1>
                    </div>
                    {
                        tab === 0 ? 
                        <PemilikTable data={kosts}/> : 
                        <BookRequestTable data={books} />
                    }
                </content>
            </div> 
        </>
    )
}


export default Dashboard