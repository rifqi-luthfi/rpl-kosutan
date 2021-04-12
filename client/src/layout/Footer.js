import React from 'react'
import { Link } from "react-router-dom";
import Button from '../components/Button';

const Footer = () => {
    return(
        <div className="mx-auto px-24 py-6 bg-green-dark relative ">
            <div className="sm:flex sm:mt-8">
                <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div className="flex items-center mr-32">
                        <img className="mr-4"alt="logo" src={process.env.PUBLIC_URL + '/logo_kosutan.png'} />
                        <p className="font-sans text-green-lightest text-2xl text font-bold tracking-tighter">Kosutan.</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-green mb-2">Kosutan</span>
                        <span className="my-0"><a href="#" class="text-green-lightest  text-sm hover:text-blue-500">About Us</a></span>
                        <span className="my-0"><a href="#" class="text-green-lightest  text-sm hover:text-blue-500">Carrer</a></span>
                        <span className="my-0"><a href="#" class="text-green-lightest  text-sm hover:text-blue-500">Categories</a></span>
                        <span className="my-0"><a href="#" class="text-green-lightest  text-sm hover:text-blue-500">Promote yout Kost</a></span>
                    </div>
                    <div className="flex flex-col">
                     <span className="font-bold text-lg text-green mt-4 md:mt-0 mb-2">Services</span>
                        <span className="my-0"><a href="#" class="text-green-lightest text-sm hover:text-blue-500">Privacy Policy</a></span>
                        <span className="my-0"><a href="#" class="text-green-lightest text-sm hover:text-blue-500">Terms & Condition</a></span>
                        <span className="my-0"><a href="#" class="text-green-lightest text-sm hover:text-blue-500">Costumer Service</a></span>
                    </div>
                    <div className="flex flex-col mr-6">
                        <span className="font-bold text-lg text-green mt-4 md:mt-0 mb-2">Contact Us</span>
                        <div className="flex items-center">
                            <img className="mr-2"alt="logo" src={process.env.PUBLIC_URL + '/email_cs.png'} />
                            <span className="font-sans text-green-lightest tracking-tighter">cs@Kosutan.com</span>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-2"alt="logo" src={process.env.PUBLIC_URL + '/Whatsapp.png'} />
                            <span className="font-sans text-green-lightest tracking-tighter">08XX - XXXX - XXXX</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer