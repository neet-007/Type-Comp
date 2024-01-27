import React, {useRef } from 'react'
import './OutputText.css'
import InputText from '../InputText/InputText'
import { useGameHook } from '../../../hooks/useGameHook'

const OutputText = () => {
  const outputRef = useRef()
  const fetchedData = 'this is an example'
  const e = fetchedData.split("")
  return (
    <>
     <div ref={outputRef}>{e.map((char, i) => {
        return <span key={char + i}>{char}</span>
      })}</div>
    <InputText ref={outputRef}/>
    </>
  )
}

//id={`text-${i}-${char}`}
export default OutputText