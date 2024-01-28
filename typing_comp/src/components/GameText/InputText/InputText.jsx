import React, { useRef, forwardRef} from 'react'
import './InputText.css'
import { useGameHook } from '../../../hooks/useGameHook'

const InputText = forwardRef(({}, ref) => {
    const inputRef = useRef()
    const {handleAction, mistakeIndices} = useGameHook({inputRef, outputRef:ref})

    if (mistakeIndices.length === 3 && inputRef.current !== undefined){
      inputRef.current.maxLength = mistakeIndices[0] + 1
    }else if(inputRef.current !== undefined){
      inputRef.current.maxLength = 524288
    }

    return (
      <>
        <input type="text" ref={inputRef} onChange={handleAction}/>
      </>
    )
  }
)
export default InputText