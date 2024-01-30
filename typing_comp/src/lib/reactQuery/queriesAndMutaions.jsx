import {useQuery, useMutation} from '@tanstack/react-query'
import { getTextChallenge, getUser, login, logout, postRace, postUserProfile, register } from '../axios/axios'

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

export const usePostUserProfile = () => {
    return useMutation({
        mutationFn: ({userId, firstName, lastName, bio, nationality}) => postUserProfile({userId, firstName, lastName, bio, nationality})
    })
}

export const useGetUser = () => {
    return useQuery({
        queryKey:['get-user'],
        queryFn:getUser
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