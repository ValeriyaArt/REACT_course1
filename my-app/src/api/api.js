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
}
export const getUsers = (currentPage, pageSize) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}