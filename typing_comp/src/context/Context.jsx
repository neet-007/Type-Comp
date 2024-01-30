import React,{useState, useEffect, createContext, useContext} from "react";
import { getAuthUser, getUser } from "../lib/axios/axios";

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState()
    const [theme, setTheme] = useState()
    let themeValue = ''
    switch (theme) {
        case 'dark':
            break;
        case 'vaibrant':
            break;
        case 'calm':
            break;
        default:
            themeValue = 'main-theme'
            break;
    }

    useEffect(() => {
        getAuthUser().then(res => {
            if ('error' in res) return setUser(undefined)
            return setUser(res)
        })
    },[])
    const value = {
        theme:[themeValue,setTheme],
        user,
        setUser
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => useContext(AppContext)