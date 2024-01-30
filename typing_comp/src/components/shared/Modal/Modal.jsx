import React from 'react'
import './Modal.css'
import {X} from 'react-bootstrap-icons'
import AppButton from '../AppButton/AppButton'

const Modal = ({title='modal title', className, backButtonLable, backButtonOnClick, frontButtonLable, frontButtonOnClick ,noButtons, noCloseButton, children=<p>modal childer</p>}) => {
  return (
    <div className={`${className} modal-overlay`}>
        <article className={`${className} modal-article`}>
            <div className={`d-flex align-items-center ${!noCloseButton ? 'justify-content-between' : 'justify-content-center'}`}>
                <h3 className='cap'>{title}</h3>
                {!noCloseButton &&
                    <span className='d-flex align-items-center justify-content-center cursor-pointer'><X size={30}/></span>
                }
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                {children}
            </div>
            {!noButtons &&
                <div className='d-flex m-t-auto'>
                {backButtonLable &&
                    <AppButton className={' width-fit-content m-l-auto m-r-auto'}
                            children={backButtonLable} onClick={backButtonOnClick}/>
                }
                {frontButtonLable &&
                    <AppButton className={' width-fit-content m-l-auto m-r-auto'}
                    children={frontButtonLable} onClick={frontButtonOnClick}/>
                }
                </div>
            }
        </article>
    </div>
  )
}

export default Modal