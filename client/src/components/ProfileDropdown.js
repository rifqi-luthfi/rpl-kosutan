import React from 'react'
import axios from "axios";



const ProfileDropdown = () => {

    const handleLogout = async () => {
        await axios
            .get("/penyewa/endSession", { withCredentials: true })
            .then((window.location.href = "/")
        )
    }

    return (
        <div id="profile-dropdown" className="fixed -top-52 bg-white flex flex-col w-40 gap-3 p-3">
            <div className="w-full hover:bg-gray-100">
                <h1 className="px-3 py-1">Profile</h1>
            </div>
            <div className="w-full hover:bg-gray-100">
                <h1 className="px-3 py-1">History</h1>
            </div>
            <hr className=""/>
            <div className="w-full hover:bg-red-400 hover:text-white rounded-lg font-semibold transition duration-100 ease-in-out">
                <h1 onClick={handleLogout} className="px-3 py-1">Logout</h1>
            </div>
        </div>
    )
}

export default ProfileDropdown
