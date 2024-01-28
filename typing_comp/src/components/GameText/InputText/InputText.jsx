import React, { useRef, forwardRef} from 'react'
import './InputText.css'
import { useGameHook } from '../../../hooks/useGameHook'

const InputText = forwardRef(({}, ref) => {
    const inputRef = useRef()
    const {handleAction, counter, length, prevData} = useGameHook({inputRef, outputRef:ref})

    /*if (inputRef.current !== undefined){
      console.log(prevData)
      console.log(inputRef.current.value)
    }*/
    /*if (counter >= 3 && inputRef.current !== undefined) {
      inputRef.current.maxLength = length
    }else if(counter >= 3 && inputRef.current !== undefined && inputRef.current.value.length === length){
      inputRef.current.maxLength = length + 1
    }else if (inputRef.current !== undefined) {
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