import React from 'react'
import Button from '../components/Button'
import Header from '../layout/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    return (
        <>
        <Header/>
        <div>
            <main className="container flex items-center justify-between mx-auto my-12 px-6 md:px-6 lg:px-0 lg:my-32">
                <div className="hidden lg:block flex-shrink">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" alt="logo" src={process.env.PUBLIC_URL + '/hero.png'} />
                </div>
                <div className="text-center lg:text-left lg:w-2/5 p-3">
                    <div className='flex items-center mr-32'>
                        <img className="mr-4"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                        <h1 className="text-green text-4xl font-bold tracking-tighter">
                            Kosutan.
                        </h1>
                    </div>
                    <h1 className="text-green-dark text-3xl font-semibold mt-5">
                        Discover your nearest Kost & Apartment
                    </h1>
                    <div className='flex-col flex-wrap'>
                        <div className='flex flex-wrap sm:flex-row lg:flex-row justify-between mt-5'>
                            <div className="flex-auto  sm:mr-4 md:mr-4 lg:mr-0 xl:mr-4">
                                <label for="first-name" className="block -mb-3 text-lg text-green-dark font-semibold  text-left">First Name</label>
                                <input type="text" autofocus id="first-name" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2" />
                            </div>
                            <div className="flex-auto font-semibold mt-3 xs:mt-0 sm:mt-0 md:mt-0 lg:mt-0">
                                <label for="last-name" className="block -mb-3 text-lg text-green-dark text-left">Last Name</label>
                                <input type="text" autofocus id="last-name" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"  />
                            </div>
                        </div>
                        <div className="mt-3 font-semibold">
                            <label for="email" className="block -mb-3 text-lg text-green-dark text-left">Email</label>
                            <input type="email" autofocus id="email" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2" />
                        </div>
                        <div className="mt-3 font-semibold">
                            <label for="password" className="block -mb-3 text-lg text-green-dark text-left">Password</label>
                            <input type="password" autofocus id="password" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2" />
                        </div>
                        <div className="mt-3 font-semibold">
                            <label for="confirm-password" className="block -mb-3 text-lg text-green-dark text-left">Confirm Password</label>
                            <input type="password" autofocus id="confirm-password" className="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-50 w-full border-green border-2"/>
                        </div>
                    </div>
                    <div className="flex mt-6 flex-col md:flex-row text-lg">
                    <Button type="primary" size="lg">Sign up</Button>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Register
