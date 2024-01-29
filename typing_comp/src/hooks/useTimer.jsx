import { useEffect, useState } from "react"


export const useTimer = (time, state) => {
      const [count, setCount] = useState(time)
      const [isRunning, setIsRunning] = useState(state)

      useEffect(() => {
        let timer;
        if (isRunning && count > 0){
            timer = setInterval(() => {
                setCount(prev => prev - 1)
            },1000)
        }
        return () => clearInterval(timer)
      },[count, isRunning])

      return {
        count,
        isRunning,
        setIsRunning
      }
}