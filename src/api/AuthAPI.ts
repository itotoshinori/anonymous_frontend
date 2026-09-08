import api from "@/lib/axios"
import { User } from "@/types/User"

type LoginParams = {
    email: string
    password: string
}

export const getCsrfCookie = async () => {
    await api.get("/sanctum/csrf-cookie")
}

export const getUser = async (): Promise<User> => {
    const { data } = await api.get("/api/user")

    return data
}

export const login = async ({
    email,
    password,
}: LoginParams): Promise<User> => {

    await getCsrfCookie()

    const { data } = await api.post<{
        message: string
        user: User
    }>("/api/login", {
        email,
        password,
    })

    return data.user
}

export const logout = async () => {
    const { data } = await api.post("/api/logout")

    return data
}