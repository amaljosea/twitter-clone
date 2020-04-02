import React, { useEffect, useState, createContext } from 'react';
import graphql from '../graphql';
import { AUTHENTICATED_USER } from '../graphql/User/query'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAuhenticatedUser = async () => {
            try {
                const response = await graphql(AUTHENTICATED_USER)
                if (response.data.authenticatedUser) {
                    setAuthenticated(authenticated)
                }
            }
            catch {

            }
            finally {
                setLoading(false)
            }
        }
        getAuhenticatedUser()
    }, [])
    // if (loading) return "Loading..."
    // if (!authenticated) return "Not Authenticated!"
    // return "Authenticated!"
    return (
        <AuthContext.Provider value={{ loading, authenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>)
}

export default AuthProvider