import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faBars} from '@fortawesome/free-solid-svg-icons'
import './HeaderLogin.css'
import me from '../assets/images/profile.png'
import ProfileDropdown from '../components/ProfileDropdown';

const HeaderLogin = () => {

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

    const handleLogout = async () => {
        await axios
            .get("/penyewa/endSession", { withCredentials: true })
            .then((window.location.href = "/")
        )
    }

    const handleDropdown = (e) => {
        e.stopPropagation()
        const dropdown = document.getElementById('profile-dropdown').classList
        if (dropdown.contains("-top-52")) {
            dropdown.remove("-top-52")
            dropdown.add("top-20")
        }else {
            dropdown.remove("top-20")
            dropdown.add("-top-52")
        }
    }


    return (
        <div className="fixed top-0 w-full shadow-3xl bg-white z-20">
            <nav className="container mx-auto flex items-center justify-between flex-wrap p-4">
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
                    <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 mr-4 font-semibold text-light-gray transition duration-300 ease-in-out" to="/about">About</Link>
                    <Link className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block mt-1 font-semibold text-light-gray transition duration-300 ease-in-out" to="/kostlist">Kosts</Link>
                    
                </div>

                <div id="drawer" className="fixed z-20 flex flex-col p-24 justify-evenly items-center left-full top-0 h-screen w-screen bg-gray-50 text-center transform transition-left duration-150 ease-in-out">
                    <FontAwesomeIcon className="absolute top-4 right-8 cursor-pointer text-gray-300 hover:text-green text-4xl transition duration-150 ease-in-out" icon={faTimesCircle} onClick={handleHamburger}>
                    
                    </FontAwesomeIcon>
                    <div className='flex flex-col items-center' >
                        <div className='flex flex-col items-center'>
                            <img className="h-20 mr-3 mb-3" src={me} alt='Admin Image'/> 
                            <div className='mr-3'>
                                <p className='text-green-dark font-semibold'>Dimitri Irfan </p>
                                <p className='text-gray-500 text-sm -mt-1 '>Penyewa</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-6">
                            <Link className="text-gray-600 hover: hover:bg-green-dark hover:text-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out">Profile</Link>
                            <Link className="text-gray-600 hover: hover:bg-green-dark hover:text-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out">History</Link>
                            <h1 className="col-span-2 text-gray-600 hover:bg-red-400 hover:text-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" onClick={handleLogout}>Logout</h1>
                        </div>
            
                    </div>

                    <Link onClick={handleHamburger} className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" to="/home">Home</Link>
                    <Link onClick={handleHamburger} className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" to="/services">Services</Link>
                    <Link onClick={handleHamburger} className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" to="/about">About</Link>
                    <Link onClick={handleHamburger} className="text-gray-600 hover: hover:bg-gray-100 px-5 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" to="/kostlist">Kosts</Link>
                </div>
                <div className='hidden lg:flex items-center lg:w-auto'>
                    <div className='flex items-center cursor-pointer' onClick={handleDropdown}>
                        <div className='mr-3'>
                            <p className='text-green-dark font-semibold'>Dimitri Irfan </p>
                            <p className='text-gray-500 text-sm -mt-1 '>Penyewa</p>
                        </div>
                        <img className="h-10 mr-3" src={me} alt='Admin Image'/>
                        <ProfileDropdown />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderLogin
