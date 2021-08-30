import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = useCallback ((jwtToken, Id)=> {
        setToken(jwtToken);
        setUserId(Id);

        localStorage.setItem(storageName, JSON.stringify( {
            userId: Id, token: jwtToken
        }))
    }, []);
    const logout = useCallback (()=> {
        setToken(null);
        setUserId(null);


        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if(data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])


    return { login, logout, token, userId }
}