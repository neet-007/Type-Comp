import React from 'react'
import './Navbar.css'
import { useAppContext } from '../../context/Context'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [themeValue] = useAppContext()
  return (
    <nav className={`${themeValue}-navbar navbar-nav`}>
        <span className='cap'>
            <Link to={''}>
              type racer
            </Link>
          </span>
        <ul className='navbar-item-ul cap'>
            <li>
              <Link to={'/play'}>play</Link>
            </li>
            <li>
              <Link to={'/practice'}>practice</Link>
            </li>
            <li>
              <Link to={'/profile'}>profile</Link>
            </li>
            <li>
              <Link to={'/help'}>help</Link>
            </li>
        </ul>
        <ul className='navbar-auth-ul cap'>
            <li>
              <Link to={'/register'}>register</Link>
            </li>
              <li>/</li>
            <li>
              <Link to={'/login'}>login</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar