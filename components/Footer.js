import Link from 'next/link'
import { SiFacebook} from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { SiTwitter } from "react-icons/si";

export default function Footer() {
    return (
        <section className="h-full w-full bg-white text-black mt-20">
    <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 79">
    <path className="cls-2 fill-[#20c992]" d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z" transform="translate(0 -0.188)"/>
    </svg>
        <footer className="bg-[#20c992]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-2 md:px-6 text-md px-5 md:mx-10">
                <div>
                    <h3 className="mb-4 text-md md:text-xl font-semibold text-white uppercase mt-10">Destinasi Populer</h3>
                    <ul className="text-xs md:text-base">
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300">
                                    Tiket kereta api Semarang - Tegal
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300">
                                    Tiket kereta api Tegal - Semarang
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300">
                                    Tiket kereta api Jakrta - Yogyakarta
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300">
                                    Tiket Kerteta api Jakarta - Purwoketo
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-10 md:ml-20">
                    <h3 className="mb-4 md:text-xl font-semibold text-white uppercase flex flex-1 justify-end md:justify-start">Tiket Kereta Api</h3>
                    <ul className="text-xs md:text-base text-right md:text-left">
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300 flex flex-1 justify-end md:justify-start">
                                   FAQ
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300 flex flex-1 justify-end md:justify-start">
                                   Mudik Lebaran
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300 flex flex-1 justify-end md:justify-start">
                                   Rute Perjalanan Kereta Api
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-10 md:ml-32">
                    <h3 className="mb-4 text-md md:text-lg font-semibold text-white uppercase">Tiket Online</h3>
                    <ul className="text-xs md:text-base">
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300">
                                    Tentang Kami
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300">
                                    Karir
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">
                                <a className="text-[#f3f7fd] md:hover:text-yellow-300">
                                    Blog
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-10 md:mr-0 md:ml-32">
                    <h3 className="mb-4 text-md md:text-lg font-semibold text-white uppercase flex flex-1 justify-end md:justify-start">Bantuan</h3>
                        <ul className="text-xs md:text-base text-right">
                            <li className="mb-2">
                                <Link href="/">
                                    <a className="text-[#f3f7fd] md:hover:text-yellow-300 flex flex-1 justify-end md:justify-start">
                                        Syarat dan Ketentuan
                                    </a>
                                </Link> 
                            </li>
                            <li className="mb-2">
                                <Link href="/">
                                    <a className="text-[#f3f7fd] md:hover:text-yellow-300 flex flex-1 justify-end md:justify-start">
                                       Kebijakan Privasi
                                    </a>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/">
                                    <a className="text-[#f3f7fd] md:hover:text-yellow-300 flex flex-1 justify-end md:justify-start">
                                       Pusat Resolusi
                                    </a>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/">
                                    <a className="text-[#f3f7fd] md:hover:text-yellow-300 flex flex-1 justify-end md:justify-start">
                                        Hubungi Kami
                                    </a>
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="py-6 px-4 bg-[#20c992] md:flex md:items-center md:justify-between">
                <span className="text-xs md:text-md text-white md:text-center">© 2022 Tiket Online™ All Rights Reserved.</span>
                    <div className="flex mt-4 space-x-6 md:justify-center md:mt-0"> 
                        <Link href="/">
                            <a className="text-[#f3f7fd] md:hover:text-yellow-300">
                                <SiFacebook className="w-5 h-5" />
                            </a>    
                        </Link>
                        <Link href="/">
                            <a className="text-[#f3f7fd] md:hover:text-yellow-300"> 
                                <FiInstagram  className="w-5 h-5" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="text-[#f3f7fd] md:hover:text-yellow-300"> 
                                <SiTwitter className="w-5 h-5" />
                            </a>
                        </Link>
                    </div>
            </div>
        </footer>
</section>
    )
}