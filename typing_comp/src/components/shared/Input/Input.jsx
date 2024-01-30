import React from 'react'
import { forwardRef } from 'react'
import './Input.css'

const Input = forwardRef(({name='placeholder', className, type, ...props}, ref) => {

    return(
        <span className='input-span'>
            <label htmlFor={name} className={`${className} cap`}>{name}</label>
            <input className='input-input' type={type} id={name} title={name} ref={ref} {...props}/>
        </span>
    )

})

export default Input