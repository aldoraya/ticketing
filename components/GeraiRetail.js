import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function GeraiRetail() {
    return (
        <section className="w-3/5 h-max flex mt-5 pb-10 rounded-sm relative bottom-10">
        <div className="w-full mx-10 h-max p-2 mt-4 bg-white">
            <div className="p-2 border-b border-gray-300">
                <h3 className="text-lg font-semibold">Gerai Retail</h3>
            </div>
           <Link href="/pembayaran/alfamart">
                <a>
                    <div className="p-2 border-b border-gray-300 flex">
                        <p>Alfamart</p>
                        <button className="flex flex-1 justify-end">
                        <Image src="/alfamart.jpg" width={56} height={24} alt="alfamart" />
                        <MdOutlineArrowForwardIos className="w-6 h-6" />
                        </button>  
                    </div>
                </a>
           </Link>
            <Link href="/pembayaran/indomaret">
                <a>
                    <div className="p-2 border-b border-gray-300 flex">
                        <p>Indomaret</p>
                        <button className="flex flex-1 justify-end">
                        <Image src="/indomaret.jpg" width={56} height={24} alt="indomaret" />
                        <MdOutlineArrowForwardIos className="w-6 h-6" />
                        </button>  
                    </div>
                </a>
            </Link>
        </div>
    </section>
    )
}