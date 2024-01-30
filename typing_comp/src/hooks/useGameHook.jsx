import { useState } from "react";

export const useGameHook = ({outputRef, inputRef, count, isRunning, setIsRunning, gameDetails, setGameDetails}) => {
    const [letterIndex, setLetterIndex] = useState(0)
    const [mistakeIndex, setMistakeIndex] = useState(undefined)
    const [prevData, setPrevData] = useState('')
    // temproray solution to the delete moving index forward
    const [prevAction ,setPrevAction] = useState(undefined)

    const endGame = (outputRefChildren) => {
        if (letterIndex + 1 === outputRefChildren.length && mistakeIndex === undefined){
            setGameDetails({won:true, speed:Math.round((((letterIndex + 1) / count ) + Number.EPSILON) * 100) / 100})
        }else{
            setGameDetails({won:false, speed:Math.round((((letterIndex + 1) / count ) + Number.EPSILON) * 100) / 100})
        }
        setLetterIndex(0)
        setPrevData(0)
        setMistakeIndex(undefined)
        setIsRunning(false)
        inputRef.current.value = ''
        return
    }

    const game = (inputRefValue, outputRefChildren, outPutIndex) => {
       if (mistakeIndex !== undefined){
        console.log(inputRefValue[inputRefValue.length - 1] === outputRefChildren[mistakeIndex].innerText)
        console.log(inputRefValue[inputRefValue.length - 1])
        console.log(outputRefChildren[mistakeIndex].innerText)
        if (inputRefValue[inputRefValue.length - 1] === outputRefChildren[mistakeIndex].innerText){
            setMistakeIndex(undefined)
            //console.log(inputRefValue[inputRefValue.length - 1])
            //console.log(outputRefChildren[mistakeIndex].innerText)
            outputRefChildren[outPutIndex].classList.remove('text-wrong')

            if (inputRefValue[inputRefValue.length - 1] === ' ' && mistakeIndex === undefined) {
                inputRef.current.value = ''
                setPrevData('')
            }
            return
        }
            outputRefChildren[outPutIndex].classList.add('text-wrong')
            return
       }
       if (inputRefValue[inputRefValue.length - 1] === outputRefChildren[outPutIndex].innerText){
            if (mistakeIndex !== undefined) setMistakeIndex(undefined)
            outputRefChildren[outPutIndex].classList.remove('text-wrong')
            //console.log(inputRefValue[inputRefValue.length - 1])
            //console.log(outputRefChildren[outPutIndex].innerText)
            if (inputRefValue[inputRefValue.length - 1] === ' ' && mistakeIndex === undefined) {
                inputRef.current.value = ''
                setPrevData('')
            }
        }else{
            if (mistakeIndex === undefined){
                setMistakeIndex(outPutIndex)
                //console.log(inputRefValue[inputRefValue.length - 1])
                //console.log(outputRefChildren[outPutIndex].innerText)
                outputRefChildren[outPutIndex].classList.add('text-wrong')
                return
            }
            outputRefChildren[outPutIndex].classList.add('text-wrong')
        }
    }
    const handleAction = () => {
        const outputRefChildren = outputRef.current.children
        const inputRefValue = inputRef.current.value

        if ((letterIndex + 1 === outputRefChildren.length && mistakeIndex === undefined) || (count === 0)){
            endGame(outputRefChildren)
        }

        let condition;
        prevData.length > inputRef.current.value.length ?
        condition = 'delete':''
        console.log(condition)
        switch (condition) {
            case 'delete':
                setPrevAction('delete')
                setLetterIndex(prev => prev - 1)
                setPrevData(inputRef.current.value)
                if (prevAction === 'add') game(inputRefValue, outputRefChildren, letterIndex - 1)
                else game(inputRefValue, outputRefChildren, letterIndex)
                break;
            default:
                setPrevAction('add')
                setLetterIndex(prev => prev + 1)
                setPrevData(inputRef.current.value)
                game(inputRefValue, outputRefChildren, letterIndex)
                break;
        }
    }

    return {
        handleAction,
        mistakeIndex,
        indicator:letterIndex - mistakeIndex > -1 ? letterIndex - mistakeIndex: -1 * (letterIndex - mistakeIndex),
        letterIndex,
        prevData,
    }
}

