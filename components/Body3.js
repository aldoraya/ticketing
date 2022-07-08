import Aos from 'aos'
import Image from 'next/image'

export default function Body3(props) {
    return (
        <section className="h-full md:h-40 md:max-w-6xl max-w-xs mx-auto bg-white text-black hidden md:block">
            <div className="mx-4 md:mx-0">
                <h2 className="mt-20 md:mt-32 bg-white text-center font-bold text-base md:text-2xl mb-10 md:mb-20">Metode Pembayaran Yang Bisa Kamu Pakai</h2>
                    <div className="grid gap-1 grid-cols-2 gap-rows-1 md:gap-4 md:grid-cols-4 md:gap-rows-4 md:mr-20 md:mb-10">
                        <nav className="relative -right-16 ml-2 md:left-20 md:ml-0">
                            <Image data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" src="/indomaret.jpg" width={208} height={88} alt="indomaret" />
                        </nav>
                        <nav className="relative -right-2 md:-right-10 md:ml-0 md:bottom-2">
                            <Image data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" src="/alfamart.jpg" width={288} height={118} alt="alfamart" />
                        </nav>
                        <nav className="relative bottom-6 -right-16 md:-right-5 md:ml-2 md:bottom-20">
                            <Image data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" src="/dana.png" width={384} height={384} alt="dana" />
                        </nav>
                        <nav data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" className="relative -right-3 md:-right-6 md:ml-0 bottom-2 md:bottom-10">
                            <Image src="/qris.jpg" width={208} height={158} alt="qris" />
                        </nav>
                    </div>
            </div>
        </section>
    )
}