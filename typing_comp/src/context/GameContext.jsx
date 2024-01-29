import React,{useState, useEffect, createContext, useContext} from "react";
import { useGetTextChallenge } from "../lib/reactQuery/queriesAndMutaions";

const GameContext = createContext()

export const GameContextProvider = ({children}) => {
    const {data, isLoading, isError, error} = useGetTextChallenge()
    return(
        <GameContext.Provider value={{data, isLoading, isError, error}}>
            {children}
        </GameContext.Provider>
    )
}


export const useGameContext = () => useContext(GameContext)