"use client"

import { useRouter } from "next/navigation"

import {
    useLogout,
    useUser,
} from "@/queries/AuthQuery"
import toast from "react-hot-toast"

export default function ManagementPage() {

    const router = useRouter()

    const {
        data: user,
        isLoading,
        isError,
    } = useUser()

    const logoutMutation = useLogout()

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                ...お待ちください...
            </div>
        )
    }

    if (isError || !user) {
        router.replace("/login")
        return null
    }

    const handleLogout = async () => {
        try {
            await logoutMutation.mutateAsync()
            toast.success("ログアウトに成功しました");
            router.replace("/login")
        } catch (error) {
            toast.error("ログアウトに失敗しました");
        }
    }

    return (
        <main className="min-h-screen bg-gray-100">

            <div className="mx-auto w-full max-w-5xl px-4 py-8">

                <div className="rounded-lg bg-white p-6 shadow">
                    <h1 className="mb-6 text-2xl font-bold">
                        管理画面
                    </h1>

                    <p className="mb-2">
                        ようこそ、{user.name}さん
                    </p>

                    <p className="mb-6 text-gray-600">
                        {user.email}
                    </p>

                    <button
                        onClick={handleLogout}
                        disabled={logoutMutation.isPending}
                        className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {logoutMutation.isPending
                            ? "ログアウト中..."
                            : "ログアウト"}
                    </button>

                </div>

            </div>

        </main>
    )
}