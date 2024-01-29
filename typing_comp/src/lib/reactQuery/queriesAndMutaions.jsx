import {useQuery, useMutation} from '@tanstack/react-query'
import { getTextChallenge, login, logout, postRace, register } from '../axios/axios'

export const useRegister = () => {
    return useMutation({
        mutationFn: ({username, password, re_password}) => register({username, password, re_password})
    })
}

export const useLogin = () => {
    return useMutation({
        mutationFn: ({username, password}) => login({username, password})
    })
}

export const useLogout = () => {
    return useMutation({
        mutationFn: () => logout()
    })
}

export const useGetTextChallenge = () => {
    return useQuery({
        queryKey:['text-challenge'],
        queryFn: getTextChallenge
    })
}

export const usePostRace = () => {
    return useMutation({
        mutationFn: ({user, textChallengeId, speed, won}) => postRace({user, textChallengeId, speed, won})
    })
}