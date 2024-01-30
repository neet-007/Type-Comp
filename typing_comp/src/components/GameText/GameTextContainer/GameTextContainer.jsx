import React, { useState } from 'react'
import OutputText from '../OutputText/OutputText'
import './GameTextContainer.css'
import Timer from '../../Timer/Timer'
import { useTimer } from '../../../hooks/useTimer'
import { usePostRace } from '../../../lib/reactQuery/queriesAndMutaions'
import { useLocation } from 'react-router-dom'
 
const GameTextContainer = () => {
  const {pathname} = useLocation()
  const {count, isRunning, setIsRunning} = useTimer(pathname.replace('/', ''))
  const {mutateAsync:postRace} = usePostRace()
  const [gameDetails, setGameDetails] = useState(undefined)

  if (gameDetails !== undefined){
    alert(`${gameDetails.won} ${gameDetails.speed}`)
    if (pathname.replace('/', '') !== 'practice'){
      postRace({user:2, textChallengeId:1, speed:gameDetails.speed, won:gameDetails.won})
    }
    setGameDetails(undefined)
  }

  return (
    <div className={`gametextcontainer-div`}>
        <span className='d-flex justify-content-between align-items-baseline'>
          <h2 className='cap'>{pathname.replace('/', '')}</h2>
          <Timer time={count}/>
        </span>
        <OutputText count={count} isRunning={isRunning} setIsRunning={setIsRunning}
                    gameDetails={gameDetails} setGameDetails={setGameDetails} gameMode={pathname.replace('/', '')}/>
    </div>
  )
}

export default GameTextContainer