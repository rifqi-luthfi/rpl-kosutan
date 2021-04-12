import React from 'react'
import { Link } from "react-router-dom";
import Button from '../components/Button';

const Header = () => {
    return (
        <div className="shadow-3xl">
            <nav className="container mx-auto flex items-center justify-between flex-wrap p-4">
                <div className="flex items-center mr-32">
                    <img className="mr-4"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                    <p className="font-sans text-green-dark text-2xl text font-bold tracking-tighter">Kosutan.</p>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full flex-grow lg:flex items-center lg:w-auto">
                    <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 mr-4 font-semibold text-light-gray transition duration-300 ease-in-out" to="/home">Home</Link>
                    <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 mr-4 font-semibold text-light-gray transition duration-300 ease-in-out" to="/services">Services</Link>
                    <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 font-semibold text-light-gray transition duration-300 ease-in-out" to="/about">About</Link>
                </div>
                
                <div className="flex">
                    <Link to="/login">
                        <Button type='secondary' size="sm">Log in</Button>
                    </Link>
                    <span className="p-1"></span>
                    <Link to="/register">
                        <Button type='primary' size="sm">Sign up</Button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
