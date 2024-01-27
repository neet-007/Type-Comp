import React from 'react'
import './AppButton.css'

const AppButton = ({variant='primary', size, border='medium', disabled, children='AppButton', ...props}) => {
  let className;
  disabled ? className = 'app-button__button-disabled': className=`app-button__button hover-${variant} border-${border}`
  return (
    <button className={className} {...props}>{children}</button>
  )
}

export default AppButton