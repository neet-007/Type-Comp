import React, { useRef, forwardRef} from 'react'
import './InputText.css'
import { useGameHook } from '../../../hooks/useGameHook'
 
const InputText = forwardRef(({count, isRunning, setIsRunning, gameDetails, setGameDetails, gameMode}, ref) => {
    const inputRef = useRef()
    const {handleAction, mistakeIndex, indicator, letterIndex, prevData} = useGameHook({inputRef, outputRef:ref, count, isRunning, setIsRunning, gameDetails, setGameDetails})


    if (inputRef.current !== undefined){
      if (indicator > 3){
        inputRef.current.maxLength = mistakeIndex
      }else if(letterIndex === ref.current.children.length){
        inputRef.current.maxLength = prevData.length
      }
      else{
        inputRef.current.maxLength = 524288
      }
    }
    /*if (mistakeIndices.length === 3 && inputRef.current !== undefined){
      inputRef.current.maxLength = mistakeIndices[0] + 1
    }else if(inputRef.current !== undefined){
      inputRef.current.maxLength = 524288
    }*/

    return (
      <>
        <input type="text" ref={inputRef} onChange={handleAction}/>
      </>
    )
  }
)
export default InputText