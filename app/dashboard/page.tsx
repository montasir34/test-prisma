
import prisma from "../lib/db";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from 'next/cache';


export default async function dashboard() {
    noStore()
    // const cookiesStore = cookies()

    // const user = cookiesStore.get('user')
    // if (!user) {
    //     return redirect('/')
    // }
    let consumable_for_today
    let retrived_tikets
    try {
         consumable_for_today = await prisma.consumable.findMany()
         retrived_tikets = await prisma.retrived_tikets.findMany()
    } catch (error) {
        throw new Error('failed to fetch data')
    }
    return <>
        <h1 className="text-right font-bold text-xl mt-7 text-[#E09F3E] ">منصرف اليوم</h1>
        <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm  text-right text-gray-500text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-xl text-right">
                            ملاحظه
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-right">
                            السعر
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-right">
                            السلعه
                        </th>
                    </tr>
                </thead>
                {consumable_for_today?.map(it => (
                    <tbody key={it.id}>
                        <tr className=" border-b bg-gray-800 border-gray-700 text-gray-400">
                            <td className="px-6 py-4 text-right">
                                {it.note}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {it.prize}
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium   text-right">
                                {it.title}
                            </th>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
        <h1 className="text-right font-bold text-xl mt-7 text-[#E09F3E] ">راجع الموارك</h1>
        <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-xl text-right">
                            ملاحظه
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-right">
                            راجعها
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-right">
                            العدد
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-right">
                            الصنف
                        </th>
                    </tr>
                </thead>
                {retrived_tikets?.map(it => (
                    <tbody key={it.id}>
                        <tr className="border-b bg-gray-800 border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium   text-right">
                                {it.note}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium   text-right">
                                {it.reviewedBy}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {it.count}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium   text-right">
                                {it.title}
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    </>

}
