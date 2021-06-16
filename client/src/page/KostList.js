import React, { useState, useEffect } from 'react'
import axios from "axios";
import KostCard from '../components/KostCard'
import Footer from '../layout/Footer';
import { useParams } from 'react-router';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const KostList = () => {
    const [kosts, setKosts] = useState([{}])
    const [filterInput, setFilterInput] = useState("");
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
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilterInput(value);
    };

    const handleSearchKost = async () => {
        if (filterInput === "" || filterInput === undefined) { 
            handleResetSearch()
        }
        else {
            setKosts(kosts.filter(o => o.nama_kost.toLowerCase().includes(filterInput.toLowerCase())))
        }        
    }
    const handleResetSearch = async () => {
        if (city) fetchKostDataByCity()
        else fetchKostData()
    }

    useEffect(() => {
        if (city) fetchKostDataByCity()
        else fetchKostData() 
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="my-12 py-32 lg:my-0">
                <div className=" container mx-auto flex flex-col px-6 md:px-6 lg:px-0">
                    <h1 className="text-green-dark text-4xl font-bold tracking-tighter mb-4">
                        Kost Lists
                    </h1>
                    <h1 className="mb-8 font-medium text-lg text-green-dark">
                        Temukan inspirasi dan ikut berbagi momen di Ruang #NyamannyaKamu
                    </h1>
                    <span className="relative">
                        <input value={filterInput} onChange={handleFilterChange} className="border p-2 focus:outline-none rounded-lg text-gray-800 w-60" placeholder="search kost"></input>
                        <button onClick={handleSearchKost} className="focus:outline-none bg-green text-white font-semibold rounded-md hover:bg-green-dark transition duration-300 ease-in-out py-3 px-6 ml-3">Search</button>
                        <button onClick={handleResetSearch} className="focus:outline-none bg-green text-white font-semibold rounded-md hover:bg-green-dark transition duration-300 ease-in-out py-3 px-6 ml-3">Reset</button>
                    </span>

                    <div className="bg-white py-8 rounded-lg">
                        <div className="flex-grow grid grid-cols-1 gap-3 lg:grid-cols-4 md:grid-cols-2">
                            {
                                kosts.map((data, i) => {
                                    return <KostCard key={i} data={data}></KostCard>
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
