import React from 'react'
import Button from '../components/Button'
import Header from '../layout/Header'
import { Link } from "react-router-dom";
import FormLogin from '../forms/FormLogin';


const Login = () => {
    return (
        <>
        <Header/>
        <div className="container">
            <div className="bg-white lg:w-5/12  w-10/12 m-auto my-10 shadow-md rounded-xl mt-24">
                <div className="py-8 px-8 rounded-xl">
                    <Link to="/home">
                        <div className="flex items-center cursor-pointer">
                            <img className="mr-2"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                            <p className="font-sans text-green-dark text-4xl text font-bold tracking-tighter">Kosutan.</p>
                        </div>
                    </Link>
                    <h1 className="text-green-dark text-2xl font-semibold mt-5">
                    Discover your nearest 
                    Kost & Apartment
                    </h1>

                    <FormLogin />
                    
                    <div className="flex md:justify-between justify-center items-center mt-10">
                        <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                        <p className="md:mx-2 text-sm text-gray-400"> Login With Social </p> 
                        <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                    </div>

                    <div className='flex mt-7'>
                        <Button className="" variant="outlined" size="lg">Google</Button>
                    </div>

                    <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <a href="../auth/register.html" className="text-black font-medium"> Create One </a>  </p> 

                </div>
            </div>
        </div>
        </>
    )
}

export default Login
