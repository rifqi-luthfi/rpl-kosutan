import React from 'react'
import Button from '../components/Button'
import Header from '../layout/Header'
import HeaderLogin from '../layout/HeaderLogin'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  
    
    return (
        <>
            <HeaderLogin/>
            <hero className="container flex items-center justify-between mx-auto my-12 px-12 lg:px-0 md:px-6  lg:my-32">
                <div className="text-center lg:text-left lg:w-1/3 p-3">
                    <h1 className="text-green text-4xl font-bold tracking-tighter">
                        Kosutan.
                    </h1>
                    <h1 className="text-green-dark text-3xl font-semibold mt-5">
                        Discover your nearest Kost & Apartment
                    </h1>
                    <h1 className="text-green text-2xl font-semibold">
                        Kost Seeking. Redefined
                    </h1>
                    <h1 className="text-green-dark text-xl my-5">
                        Kosutan is a platform that makes kost booking process  a lot easier. through our platform, Kost Renter and Kost Seeker can be easily connected. Let’s get started!
                    </h1>
                    <div className="flex mt-6 flex-col md:flex-row">
                        <Button variant="primary" size="lg">Get Started</Button>
                        <span className="p-1"></span>
                        <Button variant="outlined" size="lg">How They Work</Button>    
                    </div>
                </div>
                <div className="hidden lg:block flex-shrink">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" alt="logo" src={process.env.PUBLIC_URL + '/hero.png'} />
                </div>
            </hero>
            <div className="bg-green-op_15 py-20">
                <content className="container mx-auto flex flex-col px-6 md:px-6 lg:px-0">
                    <h1 className="text-green-dark text-4xl font-bold tracking-tighter mb-4">
                        Popular Kost Places
                    </h1>
                    <h1 className="mb-8 font-medium text-lg text-green-dark">
                        Temukan inspirasi dan ikut berbagi momen di Ruang #NyamannyaKamu

                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                        {
                            places.map((val, i) => (
                                <>
                                <Link>
                                    <div key={i} className={`relative bg-cat_${val} h-40 bg-cover bg-center flex items-center justify-center text-white font-semibold text-xl rounded-2xl cursor-pointer`}>
                                        <span className="z-10 capitalize">{val}</span>
                                        <div className="absolute bg-green-dark hover:opacity-80 transition duration-300 ease-in-out h-full w-full flex items-center justify-center opacity-60 rounded-2xl"></div>
                                    </div>
                                </Link>
                                </>
                            ))
                        }
                        <div className="bg-green-dark hover:bg-green-darkest transition duration-300 ease-in-out h-40 bg-cover bg-center flex items-center justify-center text-white font-semibold text-xl rounded-2xl cursor-pointer" >
                            <span className="flex items-center gap-3">
                                See more 
                                <FontAwesomeIcon className="mt-1" icon={faAngleDoubleRight}/>
                            </span>
                        </div>
                    </div>
                </content>
            </div>
            <div className="bg-green-dark py-20">
                <content className="container mx-auto flex px-6 md:px-6 lg:px-0">
                    <div>
                        <h1 className="text-white text-4xl font-bold tracking-tighter mb-4">
                            Sewa sekarang besok tidur
                        </h1>
                        <h1 className="mb-8 font-medium text-lg text-white">
                            Kami siap membantu untuk membangun mimpimu
                        </h1>
                        <Button variant="inverse_secondary" size="lg">Mau sewa ah</Button>
                    </div>
                </content>
            </div>
        
        </>
    )
}

export default Home

const places = [
    "bandung", 
    "jakarta",
    "yogyakarta", 
    "surabaya", 
    "semarang" 
]

