import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function InstantPayment() {
    return (
        <section className="w-3/5 h-max flex mt-5 rounded-sm">
        <div className="w-full mx-10 h-max p-2 mt-4 bg-white">
            <div className="p-2 border-b border-gray-300">
                <h3 className="text-lg font-semibold">Instant Payment</h3>
            </div>
            <Link href="/pembayaran/dana">
            <a>
            <div className="p-2 border-b border-gray-300 flex">
                <p>Dana</p>
                <button className="flex flex-1 justify-end">
                    <nav className="absolute top-64 mr-5 mt-3">
                        <Image src="/dana.png" width={64} height={64} alt="dana" />
                    </nav>
                    <MdOutlineArrowForwardIos className="w-6 h-6 mt-1" />
                </button>  
            </div>
            </a>
            </Link>

            <Link href="/pembayaran/qris">
            <a>
            <div className="p-2 border-b border-gray-300 flex">
                <p>Qris</p>
                <button className="flex flex-1 justify-end">
                <nav className="absolute top-80 mt-5 mr-6">
                    <Image src="/qris.jpg" width={48} height={32} alt="qris" />
                </nav>
                <MdOutlineArrowForwardIos className="w-6 h-6 mt-2" />
                </button>  
            </div>
            </a>
            </Link>
        </div>
    </section>
    )
}