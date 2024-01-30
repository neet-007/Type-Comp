import React, {useRef } from 'react'
import './OutputText.css'
import InputText from '../InputText/InputText'
import { useGameContext } from '../../../context/GameContext'

const OutputText = ({count, isRunning, setIsRunning, gameDetails, setGameDetails, gameMode}) => {
  const outputRef = useRef()
  const {data, isLoading, isError, error} = useGameContext()

  if (isLoading) return <h1>Loading...</h1>
  if (isError){
    console.log(error)
  }
  const e = data.text.split("")
  return (
    <>
     <div ref={outputRef}>{e.map((char, i) => {
        return <span key={char + i}>{char}</span>
      })}</div>
    <InputText ref={outputRef} count={count} isRunning={isRunning} setIsRunning={setIsRunning}
               gameDetails={gameDetails} setGameDetails={setGameDetails} gameMode={gameMode}/>
    </>
  )
}

//id={`text-${i}-${char}`}
export default OutputText