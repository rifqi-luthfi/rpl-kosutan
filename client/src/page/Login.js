import React from 'react'
import Button from '../components/Button'
import Header from '../layout/Header'

const Login = () => {
    return (
        <>
        <Header/>
        <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md rounded-3xl mt-24">
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
                <form action="" className="mt-6">
                    <div className="my-5 text-sm">
                        <label for="username" className="block text-black">Username</label>
                        <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border-green border-2 rounded-xl" placeholder="Username" />
                    </div>
                    <div className="my-5 text-sm">
                        <label for="password" className="block text-black">Password</label>
                        <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border-green border-2 rounded-xl" placeholder="Password" />
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
