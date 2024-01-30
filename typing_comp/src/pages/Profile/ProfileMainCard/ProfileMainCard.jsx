import React from 'react'
import './ProfileMainCard.css'
import { useAppContext } from '../../../context/Context'

const ProfileMainCard = () => {
   const {theme, user} = useAppContext()
   const [themeValue] = theme
  return (
    <article className={`${themeValue}-profile-main-card profile-main-card`}>
        <img src="" alt="" />
        <div className='d-flex flex-d-column cap'>
            <span>username:{user.user.username}</span>
            <span className='d-flex justify-content-between'>
                <span className='d-flex flex-d-column'>
                    <span>average speed:{user.average_speed}</span>
                    <span>top speed:{user.top_speed}</span>
                </span>
                <span className='d-flex flex-d-column'>
                    <span>races won:{user.races_won}</span>
                    <span>rank:100</span>
                </span>
            </span>
        </div>
    </article>
  )
}

export default ProfileMainCard