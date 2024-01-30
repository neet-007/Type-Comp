import React,{useState, useEffect, createContext, useContext} from "react";
import { useGetTextChallenge } from "../lib/reactQuery/queriesAndMutaions";
import { useLocation } from "react-router-dom";

const GameContext = createContext()

export const GameContextProvider = ({children}) => {
    const {pathname} = useLocation()
    const {data, isLoading, isError, error} = useGetTextChallenge({
        oneWord:pathname.replace('/','') === 'one-word' ? true: undefined,
        ancient:pathname.replace('/','') === 'ancient' ? true: undefined
    })
    return(
        <GameContext.Provider value={{data, isLoading, isError, error}}>
            {children}
        </GameContext.Provider>
    )
}


export const useGameContext = () => useContext(GameContext)