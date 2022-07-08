import Image from "next/image"
import SideBarMobile from "./mobile/SideBarMobile";

export default function Logo() {
    return (
        <>
        <div className="my-5 cursor-pointer hidden sm:block z-20">
            <nav className="ml-2 hidden md:block">
                <Image src="/tailwind.png" width={64} height={34} alt="logo-img"/>
            </nav>
            <p className="text-3xl absolute top-4 left-24 font-semibold">Ticketing</p>
        </div>
        <div className="flex flex-1 justify-center sm:hidden h-full">
            <nav className="absolute left-4 top-4 text-white">
                <SideBarMobile />
            </nav>
            <p className="relative top-3 text-3xl text-white font-semibold">
                Ticketing
            </p>
        </div>
        </>
    )
}