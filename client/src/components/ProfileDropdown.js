import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {

    const handleLogout = async () => {
        await axios
            .get("/penyewa/endSession", { withCredentials: true })
            .then((window.location.href = "/")
        )
    }

    return (
        <div id="profile-dropdown" className="fixed -top-52 bg-white flex flex-col w-50 z-50 gap-3 p-3">
            <div className="w-full hover:bg-gray-100">
                <Link className="text-gray-600 hover: hover:bg-green-dark hover:text-gray-100 px-3 py-1 rounded-xl block font-semibold text-light-gray transition duration-300 ease-in-out" to="/history">History</Link>
            </div>
            <hr className=""/>
            <div className="w-full hover:bg-red-400 hover:text-white rounded-lg font-semibold transition duration-100 ease-in-out">
                <h1 onClick={handleLogout} className="px-3 py-1">Logout</h1>
            </div>
        </div>
    )
}

export default ProfileDropdown
