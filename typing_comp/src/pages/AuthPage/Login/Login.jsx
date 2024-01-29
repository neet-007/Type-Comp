import React, { useRef } from 'react'
import './Login.css'
import Input from '../../../components/shared/Input/Input'
import AppButton from '../../../components/shared/AppButton/AppButton'
import { useLogin } from '../../../lib/reactQuery/queriesAndMutaions'

const Login = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const {mutateAsync:login} = useLogin()

  const onSubmit = (e) => {
    e.preventDefault()
    login({username:usernameRef.current.value, password:passwordRef.current.value})
  }

  const onChange = () => {

  }

  return (
    <div className={`login-div`}>
      <h2 className={`title cap`}>login</h2>
      <form className={`login-form`} onSubmit={(e) => onSubmit(e)}>
        <Input name='username' ref={usernameRef} onChange={onChange} minLength={3} required/>
        <Input name='password' ref={passwordRef} onChange={onChange} minLength={8} required/>
        <AppButton children='login' type='submit'/>
      </form>
    </div>
  )
}

export default Login