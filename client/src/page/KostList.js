import React, { useState, useEffect } from 'react'
import axios from "axios";
import KostCard from '../components/KostCard'
import Footer from '../layout/Footer';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const KostList = () => {
    const [kosts, setKosts] = useState([{}])
    const { city } = useParams()

    const fetchKostData = async () => {
        const kostsResponse = await axios.get("/kost/getAllKost")
        setKosts(kostsResponse.data)
    }

    const fetchKostDataByCity = async () => {
        const kostsResponse = await axios.get("/kost/getKostByCity", {
            params: {
                city: city
            }
        })
        setKosts(kostsResponse.data)
    }

    useEffect(() => {
        if (city) fetchKostDataByCity()
        else fetchKostData() 
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="bg-green-op_15 py-32">
                <div className="container mx-auto flex flex-col px-6 md:px-6 lg:px-0">
                    <h1 className="text-green-dark text-4xl font-bold tracking-tighter mb-4">
                        Kost Lists
                    </h1>
                    <h1 className="mb-8 font-medium text-lg text-green-dark">
                        Temukan inspirasi dan ikut berbagi momen di Ruang #NyamannyaKamu
                    </h1>
                    <div className="bg-white p-12 rounded-lg">
                        <div className="flex-grow grid grid-cols-1 gap-3 lg:grid-cols-4 md:grid-cols-2">
                            {
                                kosts.map((data, i) => {
                                    return <Link to={`kosts/${data.id_kost}`}><KostCard key={i} data={data}></KostCard></Link> 
                                })  
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default KostList
