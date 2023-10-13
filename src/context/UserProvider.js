import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from '../axios'


const { createContext } = require("react");


const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const cookies = new Cookies();
    let { pathname } = useLocation();


    const fetchUser = async (token) => {
        try {
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            const data = await axios.get('/user/userdata', { headers })
            let user = data?.data?.user;
            setUser({ ...user, token })
            setLoading(false)
            if (pathname !== '/') {
                navigate('/', { replace: true })
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
            navigate('/auth', { replace: true })
        }

    }
    useEffect(() => {
        if (user) {
            if (!pathname === '/') {
                navigate('/', { replace: true })
            }
        } else {
            let token = cookies.get('token');
            if (token) {
                fetchUser(token)
            }

        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {loading === false && children}
        </UserContext.Provider>
    )

}

export const UserState = () => {
    return useContext(UserContext)
}

export default UserProvider;