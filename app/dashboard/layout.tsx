import Link from "next/link";
// import LogoutButton from "../ui/logoutButton";


export default function dashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="bg-[#335C67] h-screen p-3 md:p-3">
        <h1 className="text-center text-4xl text-[#FFF3B0] p-3">نظام سندس</h1>
            <div className="absolute right-2 top-5">
                {/* <LogoutButton /> */}
            </div>
        <div className="flex justify-around items-center bg-[#E09F3E] rounded-md">
            <div className="flex items-center justify-center gap-4 p-2  text-[#335C67]">
                <Link className="bg-[#FFF3B0] rounded-md p-2 whitespace-nowrap" href="/dashboard/createConsum">اضافه منصرف</Link>
                <Link className="bg-[#FFF3B0] rounded-md p-2 whitespace-nowrap" href="/dashboard/retrivedTickets">اضافه راجع موارك</Link>
                <Link className="bg-[#FFF3B0] rounded-md p-2 whitespace-nowrap" href="/dashboard">القائمه الرئيسيه</Link>
            </div>
        </div>
        {children}
    </main>
}