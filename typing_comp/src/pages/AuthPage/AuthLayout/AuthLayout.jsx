import React from 'react'
import './AuthLayout.css'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { useAppContext } from '../../../context/Context'

const AuthLayout = () => {
  const [themeValue] = useAppContext()
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
        <div className={`${themeValue}-authlayout`}>
            <Outlet/>
        </div>
    </Suspense>
  )
}

export default AuthLayout