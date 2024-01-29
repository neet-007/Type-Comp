import React from 'react'
import './Timer.css'

const Timer = ({time}) => {
  return (
    <span className='timer-span'>{time}</span>
  )
}

export default Timer