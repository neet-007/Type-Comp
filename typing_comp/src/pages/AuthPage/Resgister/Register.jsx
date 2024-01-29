import React, { useRef } from 'react'
import './Register.css'
import Input from '../../../components/shared/Input/Input'
import AppButton from '../../../components/shared/AppButton/AppButton'
import { useRegister } from '../../../lib/reactQuery/queriesAndMutaions'


const Register = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const rePasswordRef = useRef()

  const {mutateAsync:register, error} = useRegister()
  const onSubmit = (e) => {
    e.preventDefault()

    register({username:usernameRef.current.value, password:passwordRef.current.value, re_password:rePasswordRef.current.value})
    usernameRef.current.value = ''
    passwordRef.current.value = ''
    rePasswordRef.current.value = ''
  }

  const onChange = () => {

  }

  return (
    <div className={`register-div`}>
      <h2 className='title cap'>register</h2>
      <form className='register-form' onSubmit={(e) => onSubmit(e)}>
        <Input name='username' ref={usernameRef} onChange={onChange} minLength={3} required/>
        <Input name='password' ref={passwordRef} onChange={onChange} minLength={8} required/>
        <Input name='re password' ref={rePasswordRef} onChange={onChange} minLength={8} required/>
        <AppButton/>
      </form>
    </div>
  )
}

export default Register