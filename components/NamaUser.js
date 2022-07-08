import { MdVerified } from "react-icons/md";
import Link from 'next/link'
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";

export default function NamaUser() {
    return (
        <section className="w-1/3 h-max bg-white p-5 relative left-10">
        <p className="text-xl font-semibold text-gray-900">Nama User</p>
        <div className="flex">
        <p className="text-blue-500 text-sm relative bottom-4 mr-2">Verified</p>
        <MdVerified className="text-blue-500 relative bottom-3" />
        </div>
        <Link href="/akun">
            <a>
                <button className="flex text-gray-700">
                    <AiOutlineUser className="w-6 h-6 mr-2" />
                    <p className="hover:text-green-500 focus:text-green-500">Akun</p>
                </button>
            </a>
        </Link>
       <Link href="/myOrder">
            <a>
                <button className="flex mt-2 text-gray-700">
                    <HiOutlineClipboardList className="w-6 h-6 mr-2" />
                    <p className="hover:text-green-500 focus:text-green-500">My Order</p>
                </button>
            </a>
       </Link>
    </section>
    )
}