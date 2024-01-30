import { useState } from "react"
export const useMultiStepModal = (limit) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex(prev => {
            if (prev + 1 === limit) return prev
            return prev + 1
        })
    }

    const previous = () => {
        setCurrentIndex(prev => {
            if (prev - 1 < 0) return prev
            return prev - 1
        })
    }

    return {
        next,
        previous,
        currentIndex
    }
}