import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
export const GlobalContext = createContext();

// Provide component
export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState({});
    const [isAdmin, setIsAdmin] = useState({});

    async function checkUserLoggedIn() {
        // Check is token valid
        const isTokenValid = await axios.get("/penyewa/isTokenValid");
        setIsUserLoggedIn(isTokenValid.data);

        if (isTokenValid.data) {
        // Check user data exist
        const user = await axios.get("/penyewa/getUserLoggedIn");
            setUser(user.data);

        }
    }

    // Use effect to check every page / component change
    useEffect(() => {
        checkUserLoggedIn(); // eslint-disable-line react-hooks/exhaustive-deps
    }, []);

    return (
        <GlobalContext.Provider
        value={{
            user,
            isAdmin,
            setUser,
            isUserLoggedIn,
            checkUserLoggedIn,
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
};