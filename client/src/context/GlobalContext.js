import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
export const GlobalContext = createContext();

// Provide component
export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const [isUserPenyewa, setIsUserPenyewa] = useState({});
    const [isUserPemilik, setIsUserPemilik] = useState({});
    const [isAdmin, setIsAdmin] = useState({});

    async function checkUserLoggedIn() {
        // Check is token valid
        const isTokenValid = await axios.get("/penyewa/isTokenValid");
        setIsUserPenyewa(isTokenValid.data);

        if (isTokenValid.data) {
        // Check user data exist
        const user = await axios.get("/penyewa/getUserLoggedIn");
            setUser(user.data);

        }
    }

    async function checkUserLoggedInPemilik() {
        // Check is token valid
        const isTokenValid = await axios.get("/pemilik/isTokenValid");
        setIsUserPemilik(isTokenValid.data);

        if (isTokenValid.data) {
        // Check user data exist
        const user = await axios.get("/pemilik/getUserLoggedIn");
            setUser(user.data);

        }
    }

    

    // Use effect to check every page / component change
    useEffect(() => {
        checkUserLoggedIn(); // eslint-disable-line react-hooks/exhaustive-deps
        checkUserLoggedInPemilik();
    }, []);

    return (
        <GlobalContext.Provider
        value={{
            user,
            isAdmin,
            setUser,
            isUserPenyewa,
            isUserPemilik,
            checkUserLoggedIn,
            checkUserLoggedInPemilik
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
};