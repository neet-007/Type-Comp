import axios from 'axios'

const api = axios.create({
    baseURL:'http://127.0.0.1:8000/api/'
}
)

const config = {
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
      'X-CSRFToken': ''
    }
}

export const getCSRF = async () => {
    try {
        let res = await api.get('/auth/get-csrf')
        console.log(res)
        console.log(res.headers)
        console.log(res.config)
    } catch (error) {
        console.log(error)
    }
}

export const register = async ({username, password, re_password}) => {
    try {
        let res = await api.post('/auth/register', {username, password, re_password})
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const login = async ({username, password}) => {
    try {
        let res = await api.post('/auth/login', {username, password})
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

export const getTextChallenge = async () => {
    try {
        let res = await api.get('/text-challenge/1/')
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const postRace = async ({user, textChallengeId, speed, won}) => {
    try {
        let res = await api.post('/race/', {user_id:user, text_challenge_id:textChallengeId, average_speed:speed, won})
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

