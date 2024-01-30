import { useEffect, useState } from "react"


export const useTimer = (gameMode) => {
      let time;
      let state;
      switch (gameMode) {
        case 'practice':
          time = '-'
          state = false
          break;

        case 'one-word':
          time = 30
          state = true
          break;

        case 'ancient':
          time = 120
          state = true
          break;

        default:
          time = 90
          state = true
          break;
      }
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