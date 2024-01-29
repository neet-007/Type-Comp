import React, {useState, useEffect}from 'react'
import Cookies from 'js-cookie';
import { getCSRF } from '../../../lib/axios/axios';

const  CSRFToken = () => {
    const [csrfToken, setCsrfToken] = useState('')
    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();

                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

  useEffect(()=>{
    getCSRF().then(() => {
        setCsrfToken(getCookie('csrftoken'))
        console.log(getCookie('csrftoken'))
        console.log(Cookies.get('test'))
    })
  },[])
  return (
    <input type="hidden" name='csrfmiddlewaretoken'  readOnly/>
  )
}

export default CSRFToken