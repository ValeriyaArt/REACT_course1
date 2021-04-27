import React from "react";
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "6dec84d3-93af-4b7c-89c5-c65a95791f52"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)

    },
    getProfile(userId){
        console.warn('Old function')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
    },

}

export const authAPI={
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe} )
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}