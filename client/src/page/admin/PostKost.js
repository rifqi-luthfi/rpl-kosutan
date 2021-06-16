import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import FormPostKost from '../../forms/FormPostKost';


const PostKost = ({ type }) => {

    const [data, setData] = useState({})
    const [error, setError] = useState()
    const { id } = useParams()
    const fetchKostData = async () => {
        try {
            const response = await axios("/kost/getKostById", {
                params: {
                    id: id
                }
            })        
            setData(response.data)    
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        if (type === "edit") fetchKostData()

    }, []) //eslint-disable-line

    return (
        <>
        <div className="container">
            <div className="bg-white lg:w-5/12  w-10/12 m-auto my-10 shadow-md rounded-xl mt-24">
                <div className="py-8 px-8 rounded-xl">
                    <Link to="/home">
                        <div className="flex items-center cursor-pointer">
                            <img className="mr-2"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                            <p className="font-sans text-green-dark text-4xl text font-bold tracking-tighter">Post Kost</p>
                        </div>
                    </Link>
                    <h1 className="text-green-dark text-2xl font-semibold mt-5">
                    Tambahkan kost-an mu
                    </h1>
                    {
                        type === "edit" 
                        ? <FormPostKost dataFetched={data} />
                        : <FormPostKost />
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default PostKost
