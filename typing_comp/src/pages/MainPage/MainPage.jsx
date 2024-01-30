import React from 'react'
import './Mainpage.css'
import Card from '../../components/Card/Card'
import { useAppContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const {theme} = useAppContext()
  const [themeValue] = theme
  const navigate = useNavigate()
  return (
    <div className={`${themeValue}-main-page main-page-div`}>
        <Card title='start a game'
              text={'play a random game try getting all the letters right before the timer goes of'}
              buttonLable='play'
              buttonOnClick={() => navigate('/play')}
              />
        <Card title='practice'
              text={'practice the game at your own pace there is no timer here'}
              buttonLable='practice'
              buttonOnClick={() => navigate('/practice')}/>

        <div className='d-flex gap-1'>
          <Card title='one word'
              text={'practice the game at your own pace there is no timer here'}
              buttonLable='play'
              buttonOnClick={() => navigate('/one-word')}
              horizontal/>
          <Card title='ancient'
              text={'practice the game at your own pace there is no timer here'}
              buttonLable='play'
              buttonOnClick={() => navigate('/ancient')}
              horizontal/>
        </div>
    </div>
  )
}

export default MainPage