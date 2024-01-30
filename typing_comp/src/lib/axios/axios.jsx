import axios from 'axios'
import Cookies from 'js-cookie'
const api = axios.create({
    baseURL:'http://127.0.0.1:8000/api/'
}
)

const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
}

export const getCSRF = async () => {
    try {
        let res = await api.get('/auth/get-csrf')
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const register = async ({username, password, re_password}) => {
    try {
        let res = await axios.post('/api/auth/register', {username, password, re_password}, config)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const login = async ({username, password}) => {
    try {
        let res = await axios.post('/api/auth/login', {username, password}, config)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const logout = async () => {
    try {
        let res = await api.post('/auth/logout')
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const postUserProfile = async ({userId, firstName, lastName, bio, nationality}) => {
    try {
        let res = await api.post('/auth/users/', {user_id:userId, bio, first_name:firstName, last_name:lastName, nationality}, config)
        console.log(res)
         return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async () => {
    try {
        let res = await axios.get('/api/get-user')
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getAuthUser = async () => {
    try {
        let res = await axios.get('api/auth/users/me/')
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getTextChallenge = async ({oneWord, ancient}) => {
    try {
        let res = await axios.get(`/api/text-challenge/?${oneWord ? '&one-word=' + oneWord :''}${ancient ? '&ancient=' + ancient :''}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const postRace = async ({user, textChallengeId, speed, won}) => {
    try {
        let res = await api.post('/race/', {user_id:user, text_challenge_id:textChallengeId, average_speed:speed, won}, config)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

