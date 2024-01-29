import React from 'react'
import './Card.css'
import { useAppContext } from '../../context/Context'
import AppButton from '../shared/AppButton/AppButton'

const Card = ({title='title', text, buttonLable='card button', buttonOnClick, horizontal, noButton}) => {
  const [themeValue] = useAppContext()
  return (
    <article className={`${themeValue}-card card-article ${horizontal ? 'card-article-horizontal': 'card-article-vertical'}`}>
        <h2 className='title cap'>{title}</h2>
        <p>{text}</p>
        {!noButton ?
          <AppButton children={buttonLable} onClick={buttonOnClick}/>
        :''
        }
    </article>
  )
}

export default Card