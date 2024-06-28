'use client'
import { useFormState } from "react-dom"
import { CreateConsumable } from "../lib/actions"

export default function CreateConsumForm() {
    const initialState = { message: '', errors: {} }
    const [state, dispatch] = useFormState(CreateConsumable, initialState)
    return (
        <>
            <form action={dispatch} className="md:w-[40%] p-4 mx-auto mt-10 bg-[#E09F3E] flex flex-col gap-2 items-end rounded-xl">
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                name="title" type="text" placeholder="ادخل السلعه" />
                <input 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                name="prize" type="text" placeholder="ادخل السعر" />
                <textarea  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
                 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                   dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right" name="note" placeholder="ادخل ملاحظه" />
                   <label htmlFor="choose" className="text-gray-700 mt-4">دين او كاش</label>
                <select id="choose" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="financial_status">
                    <option value="CASH">كاش</option>
                    <option value="DEBT">دين</option>
                </select>
                <button className=" bg-[#FFF3B0] text-[#E09F3E]  font-medium rounded-lg
                 text-sm px-5 py-2.5  w-20   focus:outline-none " 
                 type="submit">اضافه</button>
            </form>
        </>

    )
}
