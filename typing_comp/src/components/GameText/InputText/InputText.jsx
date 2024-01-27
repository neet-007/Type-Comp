import React, { useRef, forwardRef} from 'react'
import './InputText.css'
import { useGameHook } from '../../../hooks/useGameHook'

const InputText = forwardRef(({}, ref) => {
    const inputRef = useRef()
    const {game, handleAction, counter, setLetterIndex} = useGameHook({inputRef, outputRef:ref})

    const handlekey = (e) => {
      if (e.key === 'Backspace') return setLetterIndex(prev => prev - 1)
      if (counter < 2) setLetterIndex(prev => prev + 1)
      game()
    }
    return (
      <>
        <input type="text" ref={inputRef} onChange={handleAction}/>
      </>
    )
  }
)
export default InputText