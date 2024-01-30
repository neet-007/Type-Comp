import React from 'react'
import './AppButton.css'
import { useAppContext } from '../../../context/Context'

const AppButton = ({variant='primary', size, border='medium', disabled, children='AppButton', className,...props}) => {
  /*let className;
  disabled ? className = 'app-button__button-disabled': className=`app-button__button hover-${variant} border-${border}`
  */
  const {theme}= useAppContext()
  const [themeValue] = theme
  return (
    <button className={`${themeValue}-button cap ${className}`} {...props}>{children}</button>
  )
}

export default AppButton