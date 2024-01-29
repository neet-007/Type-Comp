import React, { useRef, forwardRef} from 'react'
import './InputText.css'
import { useGameHook } from '../../../hooks/useGameHook'

const InputText = forwardRef(({count, isRunning, setIsRunning, gameDetails, setGameDetails}, ref) => {
    const inputRef = useRef()
    const {handleAction, mistakeIndex, indicator} = useGameHook({inputRef, outputRef:ref, count, isRunning, setIsRunning, gameDetails, setGameDetails})


    if (inputRef.current !== undefined){
      if (indicator > 3){
        inputRef.current.maxLength = mistakeIndex
      }else{
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