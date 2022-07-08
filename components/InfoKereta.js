import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image"

export default function InfoKereta() {
    return (
        <main className="w-full h-40 p-5 bg-white shadow-lg pt-32"> 
        <div className="mx-10 ml-28">
        <nav className="absolute left-20 top-24">
            <Image src="/train.png" width={32} height={32} alt="keretz" />
        </nav>
        <div className="relative bottom-10">
        <h2 className="text-xl font-semibold text-gray-900">Pilih Kereta Pergi</h2>
        <div className="flex relative bottom-2">
            <p className="text-gray-700 font-semibold">Gambir (GMR)</p>
            <nav className='relative top-1 mx-2'>
                <BsArrowRight className='w-4 h-4 ' />
            </nav>
            <p className="text-gray-700 font-semibold">Bandung (ALL)</p>
            <p className="px-2 relative bottom-1">.</p>
            <p className="text-gray-700 font-semibold">Kam, 7 Apr</p>
            <p className="px-2 relative bottom-1">.</p>
            <p className="text-gray-700 font-semibold">1 Penumpang</p>
        </div>
        <div className="flex flex-1 justify-end">
            <Link href="/">
            <a>
                <button className="px-6 py-2 rounded-xl bg-[#20c992] hover:bg-green-500 text-white relative bottom-16">UBAH PENCARIAN</button>
            </a>
            </Link>
        </div>
        </div>
        </div>  
    </main>
    )
}