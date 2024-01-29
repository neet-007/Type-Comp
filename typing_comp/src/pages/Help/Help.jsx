import React from 'react'
import './Help.css'
import Card from '../../components/Card/Card'

const Help = () => {
  return (
    <div className={'help-div'}>
        <Card title='how to play' text={`type racer is game where you try to write the paragrahp
                                         as fast as you can there is a counter, when you get a charecter wrong its highlited
                                         after 3 tries the input will lock until you get it rigth`} noButton/>
        <Card title='how are the points counted' text={`dkl;sak;daskd;laskd
                                                        dsakjdlsajdlksadjsalkdjaslk
                                                        djsadlksajdklsajdksaljdksal
                                                        djlsadjsad`} noButton/>
        <span className='d-flex gap-1'>
            <Card horizontal noButton/>
            <Card horizontal noButton/>
        </span>
    </div>
  )
}

export default Help