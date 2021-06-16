import React from 'react'
import Button from '../components/Button'
import { Link } from "react-router-dom";
import FormLogin from '../forms/FormLogin';
import { GoogleLogin } from "react-google-login"


const Login = () => {

    return (
        <>
        <div className="container">
            <div className="bg-white lg:w-5/12  w-10/12 m-auto my-10 shadow-md rounded-xl mt-24">
                <div className="py-8 px-8 rounded-xl">
                    <Link to="/home">
                        <div className="flex items-center cursor-pointer">
                            <img className="mr-2"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                            <p className="font-sans text-green-dark text-4xl text font-bold tracking-tighter">Kosutan.</p>
                        </div>
                    </Link>
                    <h1 className="text-green-dark text-2xl font-semibold mt-5">
                    Discover your nearest 
                    Kost & Apartment
                    </h1>

                    <FormLogin />
{/*                     
                    <div className="flex md:justify-between justify-center items-center mt-10">
                        <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                        <p className="md:mx-2 text-sm text-gray-400"> Login With Social </p> 
                        <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                    </div> */}

                        {/* <GoogleLogin 
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login"
                            component={Button}
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                            render={renderProps => (
                                <div className="flex mt-7" onClick={renderProps.onClick}>
                                    <Button variant="outlined" size="lg">Google</Button>
                                </div>
                            )}
                        /> */}

                    

                    {/* <p className="mt-12 text-xs text-center font-light text-gray-400"> Dont have an account? <a href="/register" className="text-gray-500 hover:text-green-darkest hover:font-bold font-medium"> Create One </a>  </p>  */}

                </div>
            </div>
        </div>
        </>
    )
}

export default Login
