"use client"

import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query"

import {
    getUser,
    login,
    logout,
} from "@/api/AuthAPI"

type LoginParams = {
    email: string
    password: string
}

export const useUser = () => {

    return useQuery({
        queryKey: ["user"],
        queryFn: getUser,

        retry: false,

        staleTime: 5 * 60 * 1000,
    })
}

export const useLogin = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (params: LoginParams) =>
            login(params),

        onSuccess: (user) => {

            queryClient.setQueryData(
                ["user"],
                user
            )
        },
    })
}

export const useLogout = () => {
    const queryClient = useQueryClient()

    return useMutation({

        mutationFn: logout,

        onSuccess: () => {

            queryClient.removeQueries({
                queryKey: ["user"],
            })

        },
    })
}