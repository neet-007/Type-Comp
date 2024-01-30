import React from 'react'
import './Profile.css'
import ProfileMainCard from './ProfileMainCard/ProfileMainCard'
import ProfileSubCard from './ProfileSubCard/ProfileSubCard'
import { useAppContext } from '../../context/Context'

const Profile = () => {
  const {theme} = useAppContext()
  const [themeValue] = theme
  return (
    <div className={`${themeValue}-profile-div profile-div`}>
        <ProfileMainCard/>
        <div className='d-flex gap-1'>
            <ProfileSubCard/>
            <ProfileSubCard/>
        </div>
    </div>
  )
}

export default Profile