import { useState } from "react";

export const useGameHook = ({outputRef, inputRef}) => {
    const [letterIndex, setLetterIndex] = useState(0)
    const [mistakeIndices, setMistakeIndices] = useState([])
    const [prevData, setPrevData] = useState('')
    //const outputChar = outputRef.current.children[letterIndex]
    //const inputWord = inputRef.current.value

    const game = (inputRefValue, outputRefChildren, outPutIndex) => {
       if (inputRefValue[inputRefValue.length - 1] === outputRefChildren[outPutIndex].innerText){
                setMistakeIndices(prev => {
                const i = prev.indexOf(outPutIndex)
                if (i > -1) prev = prev.splice(i, 1)
                outputRefChildren[outPutIndex].classList.remove('text-wrong')
                return prev.sort()
            })
            if (inputRefValue[inputRefValue.length - 1] === ' ' && mistakeIndices.length < 3) {
                inputRef.current.value = ''
                setPrevData('')
            }
        }else{
            setMistakeIndices(prev => {
                if (prev.length === 3 || prev.includes(outPutIndex)) return prev
                prev.push(outPutIndex)
                prev.sort()
                return prev
            })
            if (outPutIndex >= mistakeIndices[0] || mistakeIndices[0] === undefined) outputRefChildren[outPutIndex].classList.add('text-wrong')
        }
    }
    const handleAction = () => {
        const outputRefChildren = outputRef.current.children
        const inputRefValue = inputRef.current.value

        if (letterIndex + 1 === outputRefChildren.length && mistakeIndices.length === 0){
            setLetterIndex(0)
            setPrevData(0)
            setMistakeIndices([])
            inputRef.current.value = ''
            alert('won')
            return
        }

        let condition;
        inputRef.current.value === '' ?
        condition = 'reset':
        prevData.length > inputRef.current.value.length ?
        condition = 'delete':''

        switch (condition) {
            case 'reset':
                //setLetterIndex(0)
                setPrevData('')
                console.log('reste')
                game(inputRefValue, outputRefChildren, letterIndex)
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
        mistakeIndices
    }
}
//outputRef.current.children[inputRefIndex].classList.add('text-wrong')
