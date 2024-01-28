import React from 'react'
import './Mainpage.css'
import Card from '../../components/Card/Card'
import { useAppContext } from '../../context/Context'

const MainPage = () => {
  const [themeValue] = useAppContext()
  return (
    <div className={`${themeValue}-main-page main-page-div`}>
        <Card />
        <Card />
    </div>
  )
}

export default MainPage