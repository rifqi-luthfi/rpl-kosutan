import React from 'react'
import FormRegister from '../forms/FormRegister'
import { Link } from 'react-router-dom'
import Button from '../components/Button'


const Register = () => {
    return (
        <>
        <main className="container flex items-center justify-center m-auto my-12 px-6 md:px-6 lg:px-0 mt-24">
            <div className="bg-white text-center lg:text-left lg:w-5/12 w-10/12 rounded-xl py-8 px-8">
                <Link to="/home">
                    <div className='flex items-center mr-32'>
                        <img className="mr-2"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                        <h1 className="text-green-dark text-4xl font-bold tracking-tighter">
                            Kosutan.
                        </h1>
                    </div>
                </Link>
                <h1 className="text-green-dark text-2xl font-semibold mt-5">
                    Discover your nearest 
                    Kost & Apartment
                </h1>

                <FormRegister/>

                <div className="flex md:justify-between justify-center items-center mt-10">
                    <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                    <p className="md:mx-2 text-sm text-gray-400"> Sign up With Social </p> 
                    <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                </div>

                <div className='flex mt-7'>
                    <Button className="" variant="outlined" size="lg">Google</Button>
                </div>

                <p className="mt-12 text-xs text-center font-light text-gray-400"> Already have an account? <a href="../auth/register.html" className="text-black font-medium"> Login with One </a> </p> 
            
            </div>
        </main>
        </>
    )
}

export default Register
