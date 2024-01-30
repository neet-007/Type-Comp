import React from 'react'
import './ProfileSubCard.css'
import { useAppContext } from '../../../context/Context'

const ProfileSubCard = ({title='title', list=['aaa', 'bbb', 'ccc', 'ddd']}) => {
  const {theme} = useAppContext()
  const [themeValue] = theme
  return (
    <article className={`${themeValue}-profile-sub-card-article profile-sub-card-article cap`}>
      <h2>{title}</h2>
      <ul className='list-style-none'>
        {list.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </article>
  )
}

export default ProfileSubCard