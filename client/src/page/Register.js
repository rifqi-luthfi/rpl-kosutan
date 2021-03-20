import React from 'react'
import Button from '../components/Button'

const Register = () => {
    return (
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
                        <div className='flex flex-wrap mt-5 '>
                            <div className="mr-5 text-sm">
                                <label for="first-name" className="block text-black">First Name</label>
                                <input type="text" autofocus id="first-name" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border-green border-2 rounded-xl" placeholder="Username" />
                            </div>
                            <div className="text-sm">
                                <label for="last-name" className="block text-black">Last Name</label>
                                <input type="text" autofocus id="last-name" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border-green border-2 rounded-xl" placeholder="Username" />
                            </div>
                        </div>
                        <div className="mt-2 text-sm">
                            <label for="email" className="block text-black">Email</label>
                            <input type="email" autofocus id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border-green border-2 rounded-xl" placeholder="Username" />
                        </div>
                        <div className="mt-2 text-sm">
                            <label for="password" className="block text-black">Password</label>
                            <input type="password" autofocus id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border-green border-2 rounded-xl" placeholder="Username" />
                        </div>
                        <div className="mt-2 text-sm">
                            <label for="confirm-password" className="block text-black">Confirm Password</label>
                            <input type="password" autofocus id="confirm-password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border-green border-2 rounded-xl" placeholder="Username" />
                        </div>
                    </div>
                    <div className="flex mt-6 flex-col md:flex-row">
                    <Button type="primary" size="lg">Sign up</Button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register
