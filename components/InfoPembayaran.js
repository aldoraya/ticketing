import Image from 'next/image'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function InfoPembayaran() {
    return (
        <section className="w-1/4 bg-white h-max mt-8 p-5 rounded-sm">
            <nav className='absolute'>
                <Image width={40} height={40} src="/train.png" alt="kereta" />
            </nav>
        <div className="pl-10 flex font-semibold text-gray-900 ml-4">
            <p>Bekasi</p>
            <IoIosArrowRoundForward className="w-4 h-4 mt-1 mx-2"/>
            <p>Jatinegara</p>
            <button className="flex flex-1 justify-end">
                <MdOutlineArrowForwardIos className="w-6 h-6" />
            </button>
        </div>
        <div className="pl-10 pr-5 font-semibold text-gray-900 ml-4">
            <p>Order ID: 1010981213</p>
        </div>
        <nav className="border-b border-gray-300 my-4"></nav>
        <div className="flex">
            <p className="text-gray-700">Detail Harga</p>
            <button className="flex flex-1 justify-end">
                <MdOutlineArrowForwardIos className="w-6 h-6" />
            </button>
        </div>
        <div className="flex">
            <p className="font-semibold">Total Pembayaran</p>
            <nav className="flex flex-1 justify-end">
                <p className="text-green-500 font-semibold">IDR 97.000</p>
            </nav>
        </div>
    </section>
    )
}