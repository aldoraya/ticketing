import Logo from "../components/Logo";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function NavBarBayarDetail() {
    return (
        <div className="bg-default items-center justify-between flex mx-auto w-full text-white fixed text-center z-20">
        <Logo />
        <div className="flex flex-1 justify-center text-lg gap-2 text-white">
            <p>1. Pesan</p>
            <MdOutlineArrowForwardIos className="w-6 h-6 mt-1" />
            <div className="font-semibold flex">
                <p>2. Bayar</p>
                <MdOutlineArrowForwardIos className="w-6 h-6 mt-1" />
            </div>
            <p>3. Selesai</p>
            <MdOutlineArrowForwardIos className="w-6 h-6 mt-1" />
        </div>
        </div>
    )
}