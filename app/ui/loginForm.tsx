'use client'
import { useFormState } from "react-dom"
import { login } from "../lib/actions"
export default function LoginForm() {

    const initialState = { message: '', errors: {} }
    const [state, dispatch] = useFormState(login, initialState)
    return (
        <main className="flex items-center justify-center h-screen">
            <div className=" bg-[#E09F3E] p-4 rounded-lg">
                <h1 className="text-lg text-right">تسجيل دخول</h1>
                <form className="flex flex-col items-center gap-4 mt-4" action={dispatch}>
                    <input
                        className="block p-1 text-right rounded-md pr-2 text-black outline-none"
                        type="text"
                        name="name"
                        placeholder="الاسم" />
                    <input
                        className="block p-1 text-right rounded-md pr-2 text-black outline-none"
                        type="text"
                        name="password"
                        placeholder="كلمه المرور" />
                    <button className="mx-auto bg-[#FFF3B0] text-[#000000] py-2 px-6 rounded-md" type="submit">دخول</button>
                </form>
            </div>
        </main>
    )
}