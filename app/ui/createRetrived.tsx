'use client'
import { useFormState } from "react-dom"
import { CreateRetrivedTickets } from "../lib/actions"

export default function CreateRetrivedForm() {
    const initialState = { message: '', errors: {} }
    const [state, dispatch] = useFormState(CreateRetrivedTickets, initialState)
    return (
        <>
            <form action={dispatch} className="md:w-[40%] p-4 mx-auto mt-10 bg-[#E09F3E] flex flex-col gap-2 items-end rounded-xl">
                <select id="choose" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="title">
                    <option value="عصير عادي">اختار الصنف</option>
                    <option value="عصير عادي">عصير عادي</option>
                    <option value="عصير جامبو">عصير جامبو </option>
                    <option value="طعميه فئه 1000">طعميه فئه 1000</option>
                    <option value="طعميه فئه 500">طعميه فئه 500</option>
                    <option value="سندوتش طعميه">سندوتش طعميه</option>
                    <option value="سندوتش سلطه اسود">سندوتش سلطه اسود</option>
                    <option value="سندوتش قيمه">سندوتش قيمه</option>
                    <option value="طلب قيمه">طلب قيمه</option>
                    <option value="طلب اسود">طلب اسود</option>
                    <option value="فول">فول</option>
                    <option value="كوارع">كوارع</option>
                    <option value="عدس">عدس</option>
                    <option value="كمونيه">كمونيه</option>
                    <option value="باسم">باسم</option>
                    <option value="دمام">دمام</option>
                    <option value="كباب">كباب</option>
                    <option value="كبده">كبده</option>
                    <option value="دمعه دجاج">دمعه دجاج</option>
                    <option value="بيض طوه">بيض طوه</option>
                    <option value="لسان">لسان</option>
                    <option value="شيه">شيه</option>
                </select>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    name="count" type="text" placeholder="ادخل العدد" />
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right"
                    name="reviewedBy" type="text" placeholder="ادخل اسم المراجع" />
                <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
                 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                   dark:focus:ring-blue-500 dark:focus:border-blue-500 text-right" name="note" placeholder="ادخل ملاحظه" />
                <button className=" bg-[#FFF3B0] text-[#E09F3E]  font-medium rounded-lg
                 text-sm px-5 py-2.5  w-20   focus:outline-none "
                    type="submit">اضافه</button>
            </form>
        </>

    )
}
