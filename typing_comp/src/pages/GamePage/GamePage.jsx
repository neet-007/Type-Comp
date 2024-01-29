import React, { useEffect } from 'react'
import './GamePage.css'
import GameTextContainer from '../../components/GameText/GameTextContainer/GameTextContainer'
import { GameContextProvider } from '../../context/GameContext'
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'

const GamePage = () => {
  const navigate = useNavigate()
  return (
    <div className='gamepage-div'>
      <GameContextProvider>
        <GameTextContainer/>
      </GameContextProvider>
      <div className='d-flex justify-content-between gap-1'>
        <Card title='one word' text={'try the one word mode'}
        buttonOnClick={() => navigate('/one-word')} horizontal
        buttonLable='play'/>
        <Card title='ancient' text={'try ancient language mode'}
         buttonOnClick={() => navigate('/ancient')} horizontal
         buttonLable='play'/>
      </div>
    </div>
  )
}

export default GamePage