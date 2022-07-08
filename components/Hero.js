import ButtonDaftar from "./ButtonDaftar";
import NavBar from "./NavBar";
import Image from "next/image"
import Aos from 'aos'

export default function Hero(props) {
    return (
        <>
        <NavBar />
        <div className="md:bg-[#20c992] block">
                <div className="bg-[#20c992] w-full h-64 md:h-screen md:block">
                    <div className="mx-32 hidden md:block">
                        <h1 className="text-white text-5xl md:text-6xl font-semibold md:pt-40 hidden md:block">Pesan Tiket <br/> Online</h1>
                        <p className="text-white md:pt-5 md:pb-5 text-md md:text-lg hidden md:block">Pesan tiket kereta dengan mudah dan cepat. Tidak <br/> perlu risau, hanya dengan satu sentuhan jari, tiket <br/> kereta yang kamu butuhkan bisa didapatkan <br/> dengan mudah.</p>
                            <div data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" className="absolute right-32 top-44">
                            <nav className="hidden lg:block">
                                <Image src="/rail.png" width={384} height={384} priority alt="kereta" />
                            </nav>
                            </div>
                            <ButtonDaftar />
                    </div>
                </div>
        </div>
        </>
    )
}