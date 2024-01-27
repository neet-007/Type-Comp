import { useState } from "react";

export const useGameHook = ({outputRef, inputRef}) => {
    const [letterIndex, setLetterIndex] = useState(0)
    const [counter, setCounter] = useState(0)
    const [prevData, setPrevData] = useState('')

    const outputChar = outputRef.current.children[letterIndex]
    const inputWord = inputRef.current.value

    const handleAction = () => {
        console.log(letterIndex)
        if (inputRef.current.value === ''){
            setLetterIndex(0)
            setPrevData('')
            return
        }
        if (prevData.length > inputRef.current.value.length){
                return setLetterIndex(prev => prev - 1)
        }
        setLetterIndex(prev => prev + 1)
        setPrevData(inputRef.current.value)
    }
    const game = () => {
        if (counter >= 2) {
            inputRef.current.maxLength = inputWord.length
            setLetterIndex(prev => prev + 1)
        }
        else inputRef.current.maxLength = 524288
        if (inputWord[inputWord.length - 1] === outputChar.innerText){
            if (counter >= 2 && counter < 2) setCounter(prev => prev - 1)
            outputChar.classList.remove('text-wrong')
            if (inputWord[inputWord.length - 1] === ' ' && counter < 2) inputRef.current.value = ''

        }else{
            setCounter(prev => {
                if (prev >=2) return prev
                return prev + 1
            })
            outputChar.classList.add('text-wrong')
        }
    }

    return {
        game,
        handleAction,
        counter,
        setLetterIndex
    }
}
//outputRef.current.children[inputRefIndex].classList.add('text-wrong')
