import React from 'react'
import Button from '../components/Button'
import Header from '../layout/Header'
import { Link } from "react-router-dom";
import FormPostKost from '../forms/FormPostKost';


const PostKost = () => {
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
                    
                    <FormPostKost />
                </div>
            </div>
        </div>
        </>
    )
}

export default PostKost
