import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BookRequestTable from '../components/BookRequestTable'
import HistoryTable from '../components/HistoryTable'

const History = () => {
    const [data, setData] = useState([{}]) 
    const [books, setBooks] = useState([{}])
    const [error, setError] = useState()
    const [tab, setTab] = useState(0)
    const fetchKostHistory = async () => {
        try {
            const response = await axios.get("/sewa/getUserHistory")
            setData(response.data)
            
        } catch (error) {
            setError(error)
        }
    }

    const fetchUserBookRequest = async () => {
        try {
            const bookResponse = await axios.get("/pembayaran/getPenyewaBookRequests")
            setBooks(bookResponse.data)
            
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchKostHistory()
        fetchUserBookRequest()
    }, [data, books]) //eslint-disable-line
    return (
        <div className="container my-32 z-50">
            <content className="container mx-auto flex flex-col px-6 md:px-6 lg:px-0">
                <h1 className="text-green-dark text-4xl font-bold tracking-tighter mb-4">
                    Kosts History
                </h1>
                <h1 className="mb-8 font-medium text-lg text-green-dark">
                    Yuk! urus kostan mu dan temukan inspirasi dan ikut berbagi momen di Ruang #NyamannyaKamu
                </h1>
                <div className="flex gap-5 mb-5">
                    <h1 onClick={() => setTab(0)} className={`text-xl py-3 border-b-2 h-full cursor-pointer ${tab === 0 ? 'text-green-dark font-bold border-green-dark' : 'text-gray-300 font-medium border-gray-300'}`}>Your Kost</h1>
                    <h1 onClick={() => setTab(1)} className={`text-xl py-3 border-b-2 h-full cursor-pointer ${tab === 1 ? 'text-green-dark font-bold border-green-dark' : 'text-gray-300 font-medium border-gray-300'}`}>Transaction History</h1>
                </div>
                {
                    
                    tab === 0 
                    ? <HistoryTable data={data}/>
                    : <BookRequestTable data={books}/>
                }

            
            </content>
        </div> 
    )
}

export default History
