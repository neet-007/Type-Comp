import React, { useState } from 'react'
import OutputText from '../OutputText/OutputText'
import './GameTextContainer.css'
import Timer from '../../Timer/Timer'
import { useTimer } from '../../../hooks/useTimer'
import { usePostRace } from '../../../lib/reactQuery/queriesAndMutaions'

const GameTextContainer = () => {
  const {count, isRunning, setIsRunning} = useTimer(60, true)
  const {mutateAsync:postRace} = usePostRace()
  const [gameDetails, setGameDetails] = useState(undefined)

  if (gameDetails !== undefined){
    alert(`${gameDetails.won} ${gameDetails.speed}`)
    setGameDetails(undefined)
    postRace({user:2, textChallengeId:1, speed:gameDetails.speed, won:gameDetails.won})
  }

  return (
    <div className={`gametextcontainer-div`}>
        <span className='d-flex justify-content-between align-items-baseline'>
          <h2 className='cap'>easy</h2>
          <Timer time={count}/>
        </span>
        <OutputText count={count} isRunning={isRunning} setIsRunning={setIsRunning} gameDetails={gameDetails} setGameDetails={setGameDetails}/>
    </div>
  )
}

export default GameTextContainer