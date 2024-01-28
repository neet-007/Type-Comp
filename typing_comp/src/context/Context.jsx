import React,{useState, useEffect, createContext, useContext} from "react";

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
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
    return(
        <AppContext.Provider value={[themeValue,setTheme]}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => useContext(AppContext)