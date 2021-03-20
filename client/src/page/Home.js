import React from 'react'
import Button from '../components/Button'
import Header from '../layout/Header'

const Home = () => {
    return (
        <>
            <Header />
            <main className="container flex items-center justify-between mx-auto my-12 px-12 lg:px-0 md:px-6  lg:my-32">
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
                        <Button type="primary" size="lg">Get Started</Button>
                        <span className="p-1"></span>
                        <Button type="outlined" size="lg">How They Work</Button>    
                    </div>
                </div>
                <div className="hidden lg:block flex-shrink">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" alt="logo" src={process.env.PUBLIC_URL + '/hero.png'} />
                </div>
            </main>
            <content className="container mx-auto flex flex-col px-6 my-12 md:px-6 lg:px-0 lg:my-32">
                <h1 className="text-green-dark text-4xl font-bold tracking-tighter">
                    Popular Kost Places
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 sm: gap-6 mt-6">

                    <div className="bg-green-dark h-32 flex items-center justify-center text-white font-semibold text-xl rounded-2xl cursor-pointer">Bandung</div>
                    <div className="bg-green-dark h-32 flex items-center justify-center text-white font-semibold text-xl rounded-2xl cursor-pointer" >Jakarta</div>
                    <div className="bg-green-dark h-32 flex items-center justify-center text-white font-semibold text-xl rounded-2xl cursor-pointer" >Yogyakarta</div>
                    <div className="bg-green-dark h-32 flex items-center justify-center text-white font-semibold text-xl rounded-2xl cursor-pointer" >Surabaya</div>
                    <div className="bg-green-dark h-32 flex items-center justify-center text-white font-semibold text-xl rounded-2xl cursor-pointer" >Semarang</div>
                    <div className="bg-green-dark h-32 flex items-center justify-center text-white font-semibold text-xl rounded-2xl cursor-pointer" >See more</div>

                </div>
            </content>
        </>
    )
}

export default Home
