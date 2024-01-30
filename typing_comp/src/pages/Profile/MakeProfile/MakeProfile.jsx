import React, { useRef } from 'react'
import './MakeProfile.css'
import Modal from '../../../components/shared/Modal/Modal'
import { useAppContext } from '../../../context/Context'
import { useMultiStepModal } from '../../../hooks/useMultiStepModal'
import Input from '../../../components/shared/Input/Input'
import AppSelect from '../../../components/shared/AppSelect/AppSelect'
import { useNavigate } from 'react-router-dom'
import { usePostUserProfile } from '../../../lib/reactQuery/queriesAndMutaions'

const MakeProfile = () => {
  const {theme} = useAppContext()
  const [themeValue] = theme
  const {currentIndex, previous, next} = useMultiStepModal(3)
  const {mutateAsync:postUserProfile, isError, error} = usePostUserProfile()

  const navigate = useNavigate()

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const nationalityRef = useRef()
  const bioRef = useRef()


  const submit = () => {
    console.log(firstNameRef.current.value)
    console.log(lastNameRef.current.value)
    console.log(bioRef.current.value)
    console.log(nationalityRef.current.value)
    postUserProfile({userId: 2, firstName:firstNameRef.current.value, lastName:lastNameRef.current.value, bio:bioRef.current.value, nationality:nationalityRef.current.value})
    navigate('/')
  }
    const modals = [
        <Modal className={currentIndex !== 0 ? 'hide': ''} title='Choose your name' children={
            <div className='d-flex flex-d-column p-1'>
                <Input name={'first name'} ref={firstNameRef}/>
                <Input name={'last name'} ref={lastNameRef}/>
            </div>
        } frontButtonLable={'next'} frontButtonOnClick={next}
               noCloseButton/>,

        <Modal className={currentIndex !== 1 ? 'hide': ''} title='choose your nationality' children={
            <div className='d-flex flex-d-column justify-content-center align-items-center flex-grow-1'>
                <AppSelect optoins={[{value:'usa'},{value:'uk'}, {value:'su'}, {value:'sa'}]}
                           ref={nationalityRef}/>
            </div>
        } frontButtonLable={'next'} frontButtonOnClick={next}
               backButtonLable={'previous'} backButtonOnClick={previous}
               noCloseButton/>,

        <Modal className={currentIndex !== 2 ? 'hide': ''} title='talk about yourself' children={
            <div>
                <Input name='bio' ref={bioRef}/>
            </div>
        }backButtonLable={'finish'} backButtonOnClick={() => {submit()}}
               noCloseButton/>,
    ]
  return (
    <div className={`${theme}-make-profile-div make-profile-div`}>
        {modals.map((modal) => {
          return modal
        })}
    </div>
  )
}

export default MakeProfile









/*
const modals = [
    <Modal title='Choose your name' children={
        <div className='d-flex flex-d-column p-1'>
            <Input name={'first name'} ref={firstNameRef}/>
            <Input name={'last name'} ref={lastNameRef}/>
        </div>
    } frontButtonLable={'next'} frontButtonOnClick={next}
           noCloseButton/>,

    <Modal title='choose your nationality' children={
        <div className='d-flex flex-d-column justify-content-center align-items-center flex-grow-1'>
            <AppSelect optoins={[{value:'usa'},{value:'uk'}, {value:'su'}, {value:'sa'}]}
                       ref={nationalityRef}/>
        </div>
    } frontButtonLable={'next'} frontButtonOnClick={next}
           backButtonLable={'previous'} backButtonOnClick={previous}
           noCloseButton/>,

    <Modal title='talk about yourself' children={
        <div>
            <Input name='bio' ref={bioRef}/>
        </div>
    }backButtonLable={'finish'} backButtonOnClick={() => {previous(); submit()}}
           noCloseButton/>,
]
return (
<div className={`${theme}-make-profile-div make-profile-div`}>
    {modals.map((modal, i) => {
        if (i !== currentIndex) return React.cloneElement(modal, {className:'hide'})
        return modal
    })}
</div>
)
}

export default MakeProfile*/