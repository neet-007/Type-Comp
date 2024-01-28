import React from 'react'
import './Navbar.css'
import { useAppContext } from '../../context/Context'


const Navbar = () => {
  const [themeValue] = useAppContext()
  return (
    <nav className={`${themeValue}-navbar navbar-nav`}>
        <span className='cap'>type racer</span>
        <ul className='navbar-item-ul cap'>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
        </ul>
        <ul className='navbar-auth-ul cap'>
            <li>register</li>
            <li>/</li>
            <li>login</li>
        </ul>
    </nav>
  )
}

export default Navbar