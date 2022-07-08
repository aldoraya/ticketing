import Logo from "../components/Logo";
import { MdKeyboardArrowRight } from "react-icons/md"

export default function NavBarPesananDetail() {
    return (
        <div className="bg-[#20c992] items-center justify-between flex mx-auto w-full text-white fixed text-center z-20">
        <Logo />
        <div className="flex flex-1 justify-center text-lg gap-2 text-white">
            <div className="font-semibold flex">
                <p>1. Pesan</p>
                <MdKeyboardArrowRight className="w-6 h-6 mt-1" />
            </div>
            <p>2. Bayar</p>
            <MdKeyboardArrowRight className="w-6 h-6 mt-1" />
            <p>3. Selesai</p>
            <MdKeyboardArrowRight className="w-6 h-6 mt-1" />
        </div>
        </div>
    )
}