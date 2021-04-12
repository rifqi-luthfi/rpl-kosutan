import React from 'react'
import { Link } from "react-router-dom";
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const handleHamburger = () => {
        const drawer = document.getElementById('drawer').classList
        const body =  document.querySelector("body").style
        if (drawer.contains("left-full")) {
            body.overflowY = "hidden"
            drawer.remove('left-full')
            drawer.add('left-0')

        }else {
            body.overflowY = "visible"
            drawer.remove('left-0')
            drawer.add('left-full')
        }
    }


    return (
        <div className="shadow-3xl">
            <nav className="container mx-auto flex items-center justify-between flex-wrap p-4 ">
                <Link to="/home">
                    <div className="flex items-center mr-32 cursor-pointer">
                        <img className="mr-4"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                        <p className="font-sans text-green-dark text-2xl text font-bold tracking-tighter">Kosutan.</p>
                    </div>
                </Link>
                <div className="block lg:hidden hover:bg-gray-100 py-2 px-3 rounded-full hover:text-green cursor-pointer" onClick={handleHamburger}>
                    <FontAwesomeIcon icon={faBars} className="text-xl  transition duration-50 ease-in-out"/>
                </div>

                <div className="hidden w-full flex-grow lg:flex items-center lg:w-auto">
                    <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 mr-4 font-semibold text-light-gray transition duration-300 ease-in-out" to="/home">Home</Link>
                    <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 mr-4 font-semibold text-light-gray transition duration-300 ease-in-out" to="/services">Services</Link>
                    <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 font-semibold text-light-gray transition duration-300 ease-in-out" to="/about">About</Link>
                </div>
                <div className="hidden lg:flex">
                    <Link to="/login">
                        <Button variant='secondary' size="sm">Log in</Button>
                    </Link>
                    <span className="p-1"></span>
                    <Link to="/register">
                        <Button variant='primary' size="sm">Sign up</Button>
                    </Link>
                </div>


                <div id="drawer" className="fixed z-20 flex flex-col p-24 justify-evenly items-center left-full top-0 h-screen w-screen bg-gray-50 text-center transform transition-left duration-150 ease-in-out">
                    <FontAwesomeIcon className="absolute top-4 right-8 cursor-pointer text-gray-300 hover:text-green text-4xl transition duration-150 ease-in-out" icon={faTimesCircle} onClick={handleHamburger}>
                        
                    </FontAwesomeIcon>
                    <Link onClick={handleHamburger} className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" to="/home">Home</Link>
                    <Link onClick={handleHamburger} className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" to="/services">Services</Link>
                    <Link onClick={handleHamburger} className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" to="/about">About</Link>
                    <Link onClick={handleHamburger} to="/login">
                        <Button variant='secondary' size="lg">Log in</Button>
                    </Link>
                    <Link onClick={handleHamburger} to="/register">
                        <Button variant='primary' size="lg">Sign up</Button>
                    </Link>
                </div>

            </nav>
        </div>
    )
}

export default Header
