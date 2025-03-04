import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginCaptain = async (credentials) => {
        try {
            setLoading(true);
            // Add your login API call here
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const logoutCaptain = () => {
        setCaptain(null);
        // Add any cleanup logic here
    };

    const value = {
        captain,
        setCaptain,
        loading,
        error,
        loginCaptain,
        logoutCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;