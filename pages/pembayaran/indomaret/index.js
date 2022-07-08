import Link from 'next/link'
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRightShort, BsArrowLeft } from 'react-icons/bs';

export default function Dana() {
    return(
    <section className="bg-gray-200 w-full h-screen py-5 px-10 font-sans">
    <Link href="/tiketPembayaran">
    <a>
    <button className="flex text-green-500 hover:text-green-600">
        <BsArrowLeft className="w-6 h-6 mr-4" />
        <p>Metode Pembayaran</p>
    </button>
    </a>
    </Link>
        <h2 className="py-5 font-bold text-2xl">Indomaret</h2>
    <main className="flex">
        <div className="w-3/5 h-max bg-white p-5">
            <div className="border border-gray-300 p-2 text-gray-900">
                <div className="flex text-sm">
                    <p>Harga KAI</p>
                    <nav className="flex flex-1 justify-end">
                        <p>IDR 90.000</p>
                    </nav>
                </div>
                <div className="flex text-sm">
                    <p>Biaya Layanan KAI</p>
                    <nav className="flex flex-1 justify-end">
                        <p>IDR 7.500</p>
                    </nav>
                </div>
                <nav className="border-b border-gray-300 w-full py-2"></nav>
                <div className="flex mt-4">
                    <p>Total Pembayaran</p>
                    <nav className="flex flex-1 justify-end text-green-500">
                        <p>IDR 97.000</p>
                    </nav>
                </div>
            </div>

            <div className="mt-7">
                <Image src="/indomaret.jpg" width={56} height={36} alt="indomaret" />
                <div className="relative">
                <p className="font-semibold text-gray-900">Informasi Penting:</p>
                <p className="text-md text-gray-700">Pastikan untuk tidak menutup halaman Pembayaran ketika pembayaranmu sedang diproses dengan dana</p>
                </div>
            </div>
        </div>
        <div className="w-1/4 h-max bg-white p-4 ml-10 rounded-sm">
            <nav className="absolute">
                <Image src="/train.png" width={40} height={40} alt="kereta" />
            </nav>
            <div className="flex font-semibold ml-14 text-gray-900">
                <p>Bekasi</p>
                <BsArrowRightShort className='w-6 h-6 mx-2' />
                <p>Jatinegara</p>
                <button className="flex flex-1 justify-end">
                    <MdKeyboardArrowDown className="w-6 h-6" />
                </button>
            </div>
            <div className="flex font-semibold ml-14 text-gray-900">
                <p>Order ID:</p>
                <p className="ml-1">212121212</p>
            </div>
            <nav className="border-b border-gray-300 w-full my-4"></nav>
            <div className="flex">
                <p className="text-gray-700 text-sm">Detail Harga</p>
                <button className="flex flex-1 justify-end">
                    <MdKeyboardArrowDown className="w-6 h-6" />
                </button>
            </div>
            <div className="flex">
                <p className="font-semibold text-gray-900">Total Pembayaran</p>
                <nav className="flex flex-1 justify-end">
                    <p className="text-lg text-green-500 font-semibold">IDR 97.000</p>
                </nav>
            </div>
        </div>
    </main>
    <nav className="mt-5 text-sm text-gray-700">
                <p>Dengan menekan tombol, Anda telah menyetujui <button className="text-green-500 hover:text-green-600">Syarat dan Ketentuan</button> dan <button className="text-green-500 hover:text-green-600">kebijakan Privasi</button> tiketing</p>
    </nav>
    <div className="flex flex-1 justify-end w-3/5 mt-5">
        <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 hover:text-green-700 text-green-600 rounded-lg">Bayar</button>
    </div>
</section>
    )
}