import { useState } from "react";

export const useGameHook = ({outputRef, inputRef}) => {
    const [letterIndex, setLetterIndex] = useState(0)
    const [counter, setCounter] = useState(0)
    const [prevData, setPrevData] = useState('')
    //const outputChar = outputRef.current.children[letterIndex]
    //const inputWord = inputRef.current.value

    const game = (inputRefValue, outputRefChildren, outPutIndex) => {
       if (inputRefValue[inputRefValue.length - 1] === outputRefChildren[outPutIndex].innerText){
            console.log(inputRefValue.length - 1)
            if (counter >= 2) setCounter(prev => {if (prev - 1 === 0) return prev; return prev - 1})
            outputRefChildren[outPutIndex].classList.remove('text-wrong')
            if (inputRefValue[inputRefValue.length - 1] === ' ' && counter < 2) inputRef.current.value = ''

        }else{
            //console.log(prevData)
            //console.log(inputRefValue)
            console.log(inputRefValue.length + 1)
            setCounter(prev => {
                if (prev >=3) return prev
                return prev + 1
            })
            outputRefChildren[outPutIndex].classList.add('text-wrong')
        }
    }
    const handleAction = () => {
        const outputRefChildren = outputRef.current.children
        const inputRefValue = inputRef.current.value

        console.log(letterIndex)
        //console.log(counter)
        let condition;
        inputRef.current.value === '' ?
        condition = 'reset':
        prevData.length > inputRef.current.value.length ?
        condition = 'delete':''

        //console.log(prevData)
        //console.log(inputRef.current.value)
        switch (condition) {
            case 'reset':
                setLetterIndex(0)
                setPrevData('')
                console.log('reste')
                game(inputRefValue, outputRefChildren, letterIndex - 1)
                break;
            case 'delete':
                setLetterIndex(prev => prev - 1)
                setPrevData(inputRef.current.value)
                game(inputRefValue, outputRefChildren, letterIndex)
                break;
            default:
                setLetterIndex(prev => prev + 1)
                setPrevData(inputRef.current.value)
                game(inputRefValue, outputRefChildren, letterIndex)
                break;
        }
    }

    return {
        handleAction,
        counter,
        prevData,
        length:prevData.length
    }
}
//outputRef.current.children[inputRefIndex].classList.add('text-wrong')
