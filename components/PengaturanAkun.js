import { MdVerified } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi"

export default function PengaturanAkun() {
    return (
        <section className="w-full h-max bg-white p-5 ml-16">
        <h2 className="text-xl font-semibold text-gray-900">Nomor Ponsel dan Email</h2>
        <div className="mt-10 flex">
            <div className="block w-full">
            <div className="flex">
            <p className="text-blue-500 text-sm">Terverikasi</p>
            <MdVerified className="text-blue-500 relative ml-2 top-1" />
            </div>
            <p className="text-base text-gray-900 font-semibold">Yey! kamu sudah memverifikasi akun</p>
            </div>
            <div className="block w-full">
                <div>
                    <h2 className="text-gray-900 font-semibold text-base">Nomor Ponsel</h2>
                <div className="flex">
                    <p className="text-sm text-gray-700">+62123456789101112</p>
                    <button>
                        <HiOutlinePencil className="w-4 h-4 text-green-500 ml-2 relative bottom-3" />
                    </button>
                </div>
                <p className="text-gray-400 text-sm relative bottom-3">Klik ikon untuk edit dan verifikasi ulang nomor ponsel.</p>
                </div>
                <div className="mt-2">
                    <h2 className="text-gray-900 font-semibold text-base">Email</h2>
                    <p className="text-sm text-gray-700 relative bottom-1">namaemail@gmail.com</p>
                <p className="text-gray-400 text- relative bottom-4">Informasi penting terkait akumu akan dikirim ke email ini.</p>
                </div>
            </div>  
        </div>
    </section>
    )
}