import React from 'react'
import './Card.css'
import { useAppContext } from '../../context/Context'
import AppButton from '../shared/AppButton/AppButton'

const Card = ({title='title', text, buttonLable='card button'}) => {
  const [themeValue] = useAppContext()
  return (
    <article className={`${themeValue}-card card-article`}>
        <h2 className='title cap'>{title}</h2>
        <p>{text}</p>
        <AppButton children={buttonLable}/>
    </article>
  )
}

export default Card