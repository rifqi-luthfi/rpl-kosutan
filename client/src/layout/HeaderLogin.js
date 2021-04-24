import React from 'react'
import { Link } from "react-router-dom";
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faBars, faAngleDown, faUser, faSlidersH, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import './HeaderLogin.css'
import me from '../assets/images/profile.png'

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

    const handleDropdown = () => {
        const trigger = document.querySelector('.showPrf');
        const dropdown = document.querySelector('.DropDown')
        trigger.addEventListener('click', function(){
            dropdown.classList.toggle('active')
        })
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
                <div className='Profile' >
                    <div onClick={handleDropdown} className='showPrf'>
                        <Button >
                            <div className='flex-col mr-2'>
                                <p className='text-green-dark font-semibold'>Rifqi Luthfi </p>
                                <p className='text-gray-500 text-sm -mt-1 '>Penyewa</p>
                            </div>
                            <img src={me} alt='Admin Image'/>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </Button>
                    </div>
                    <div className='DropDown'>
                        <ul>
                            <li>
                                <a href='https://www.facebook.com/'><FontAwesomeIcon className='icon' icon={faUser}/>Profile</a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/'><FontAwesomeIcon className='icon' icon={faSlidersH}/>Settings</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon className='icon' icon={faSignOutAlt}/>Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderLogin
