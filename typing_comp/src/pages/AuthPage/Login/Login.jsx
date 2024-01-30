import React, { useRef } from 'react'
import './Login.css'
import Input from '../../../components/shared/Input/Input'
import AppButton from '../../../components/shared/AppButton/AppButton'
import { useLogin } from '../../../lib/reactQuery/queriesAndMutaions'
import { useAppContext } from '../../../context/Context'
import { useNavigate } from 'react-router-dom'
import { getAuthUser } from '../../../lib/axios/axios'

const Login = () => {
  const navigate = useNavigate()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const {user, setUser} = useAppContext()

  if (user !== undefined) navigate('/')
  const {mutateAsync:login} = useLogin()

  const onSubmit = (e) => {
    e.preventDefault()
    login({username:usernameRef.current.value, password:passwordRef.current.value}).then(res => {
      if ('error' in res) return console.log(res)
      getAuthUser().then(res => {
        if ('error' in res) return setUser(undefined)
        return setUser(res)
      })
    })
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