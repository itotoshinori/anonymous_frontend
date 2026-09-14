import api from "@/lib/axios"

import { User } from "@/types/User"

type LoginParams = {
    email: string
    password: string
}

export const getUser = async (): Promise<User> => {
    const { data } = await api.get("/api/user")

    return data
}

export const login = async ({
    email,
    password,
}: LoginParams): Promise<User> => {
    const { data } = await api.post<{
        message: string
        user: User
        token: string
    }>("/api/login", {
        email,
        password,
    })

    localStorage.setItem("auth_token", data.token)

    return data.user
}

export const logout = async () => {
    const { data } = await api.post("/api/logout")

    localStorage.removeItem("auth_token")

    return data
}