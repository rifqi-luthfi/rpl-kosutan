import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center mr-32">
                <img className="mr-4"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                <p className="font-sans text-green-dark text-2xl text font-bold tracking-tighter">Kosutan.</p>
            </div>
            <div className="w-full flex-grow lg:flex items-center lg:w-auto">
                <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 mr-4 font-semibold text-light-gray" to="/home">Home</Link>
                <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 mr-4 font-semibold text-light-gray" to="/services">Services</Link>
                <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 font-semibold text-light-gray" to="/about">About</Link>
            </div>
         </nav>
    )
}

export default Header
