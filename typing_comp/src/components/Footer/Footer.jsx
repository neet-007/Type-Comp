import React from 'react'
import './Footer.css'
import {Github, Twitter} from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className={`footer-footer`}>
        <span>
            <span className='test'><Github/></span>
            <span><Twitter/></span>
        </span>
        <span>
            <span>aaa</span>
            <span>aaa</span>
        </span>
    </footer>
  )
}

export default Footer