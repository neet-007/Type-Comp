import React from 'react'
import './ProfileMainCard.css'
import { useAppContext } from '../../../context/Context'

const ProfileMainCard = ({username='username', averageSpeed='21', topSpeed='31', raceWon='100', rank='coming soon'}) => {
  const [theme] = useAppContext()
  return (
    <article className={`${theme}-profile-main-card profile-main-card`}>
        <img src="" alt="" />
        <div className='d-flex flex-d-column cap'>
            <span>username:{username}</span>
            <span className='d-flex justify-content-between'>
                <span className='d-flex flex-d-column'>
                    <span>average speed:{averageSpeed}</span>
                    <span>top speed:{topSpeed}</span>
                </span>
                <span className='d-flex flex-d-column'>
                    <span>races won:{raceWon}</span>
                    <span>rank:{rank}</span>
                </span>
            </span>
        </div>
    </article>
  )
}

export default ProfileMainCard