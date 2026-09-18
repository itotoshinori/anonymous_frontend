"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
    return (
        <div className="mx-auto w-[90%] px-4 py-8 lg:w-1/3">
            <div className="text-4xl font-bold flex justify-center pb-2">お問合せの ページ</div>
            <p className="pb-4">このサイトの管理人にご意見やご感想のある方はこちらからメールフォームから送信してきださい</p>
            <form>
                <div>
                    <label>
                        メールアドレス
                    </label>
                    <input
                        type="email"
                        required
                        onChange={(e) =>
                            alert
                        }
                        placeholder="you@example.com"
                        className="peer w-full px-3 py-2 rounded-lg border border-slate-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none" />
                </div>
                <div>
                    <label>
                        お名前
                    </label>
                    <input
                        type="text"
                        required
                        onChange={(e) =>
                            alert
                        }
                        placeholder="山田太郎"
                        className="peer w-full px-3 py-2 rounded-lg border border-slate-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none" />
                </div>
                <div>
                    <label>
                        該当URL
                    </label>
                    <input
                        type="url"
                        onChange={(e) =>
                            alert
                        }
                        className="peer w-full px-3 py-2 rounded-lg border border-slate-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none" />
                </div>
                <div>
                    <label>
                        タイトル
                    </label>
                    <input
                        type="text"
                        required
                        onChange={(e) =>
                            alert
                        }
                        className="peer w-full px-3 py-2 rounded-lg border border-slate-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none" />
                </div>
                <div>
                    <label>
                        本文
                    </label>
                    <textarea
                        required
                        onChange={(e) =>
                            alert
                        }
                        rows={6}
                        className="peer w-full px-3 py-2 rounded-lg border border-slate-300
 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none resize-y" />
                </div>
                <div className="flex justify-end w-full">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-800 px-4 py-2 text-white mt-4 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        送信
                    </button>
                </div>
            </form>
        </div>
    );
}
