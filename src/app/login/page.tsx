"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

import { useLogin } from "@/queries/AuthQuery"
import toast from "react-hot-toast"

export default function LoginPage() {

    const router = useRouter()

    const loginMutation = useLogin()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault()

        try {
            await loginMutation.mutateAsync({
                email,
                password,
            })
            toast.success("ログインに成功しました");
            router.push("/management")
        } catch (error) {
            toast.error("ログインに失敗しました");
        }
    }

    return (
        <div className="mx-auto w-[90%] px-4 py-8 lg:w-1/3">
            <div className="rounded-lg bg-yellow-100 p-6 shadow">
                <h1 className="mb-6 text-2xl font-bold">ログイン</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            メールアドレス
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="you@example.com"
                            className="peer w-full px-3 py-2 rounded-lg border border-slate-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none" />
                    </div>
                    <div>
                        <label>
                            パスワード
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="peer w-full px-3 py-2 rounded-lg border border-slate-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none" />
                    </div>

                    <button
                        type="submit"
                        disabled={loginMutation.isPending}
                        className="rounded-md bg-blue-800 px-4 py-2 text-white mt-4 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loginMutation.isPending
                            ? "ログイン中..."
                            : "ログイン"}
                    </button>
                </form>
            </div>
        </div>
    )
}