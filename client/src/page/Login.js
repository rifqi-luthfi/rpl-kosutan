import React from 'react'
import Button from '../components/Button'
import Header from '../layout/Header'
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
        <Header/>
        <div className="bg-white lg:w-3/12 md:6/12 w-10/12 m-auto my-10 shadow-md rounded-xl mt-24">
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
                <form action="" className="">
                    <div className="my-5 text-sm">
                        <label for="username" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Username</label>
                        <input type="text" autofocus id="username" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                    </div>
                    <div className="my-5 text-sm">
                        <label for="password" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">Password</label>
                        <input type="password" id="password" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        <div className="flex justify-end mt-2 text-xs text-gray-600">
                            <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
                        </div>
                    </div>

                    <div className='flex'>
                        <Button className="" type="primary" size="lg">Login</Button>
                    </div>
                </form>

                <div className="flex md:justify-between justify-center items-center mt-10">
                    <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                    <p className="md:mx-2 text-sm text-gray-400"> Login With Social </p> 
                    <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-2 mt-7">
                    <div className='flex'>
                        <Button className="" type="outlined" size="lg">Google</Button>
                    </div>
                    <div className='flex'>
                        <Button className="" type="outlined" size="lg">Facebook</Button>
                    </div>
                </div>

                <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <a href="../auth/register.html" className="text-black font-medium"> Create One </a>  </p> 

            </div>
        </div>
        </>
    )
}

export default Login
