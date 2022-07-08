import Aos from 'aos'
import Image from 'next/image'

export default function Body3Mobile(props) {
    return (
        <section className="h-40 max-w-md bg-white text-black block md:hidden">
            <div className="mx-4">
                <h2 className="mt-20 bg-white text-center font-bold text-base mb-10 md:mb-20">Metode Pembayaran Yang Bisa Kamu Pakai</h2>
                    <div className="grid gap-4 grid-cols-2">
                        <nav  data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" className="absolute left-20">
                            <Image src="/indomaret.jpg" width={64} height={32} alt="indomaret" />
                        </nav>
                        <nav data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" className="absolute left-56">
                            <Image src="/alfamart.jpg" width={64} height={32} alt="alfamart" />
                        </nav>
                        <nav data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" className="absolute left-20 pt-5">
                            <Image src="/dana.png" width={74} height={74} alt="dana" />
                        </nav>
                        <nav data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center" className="absolute pt-10 left-56">
                            <Image src="/qris.jpg" width={64} height={32} alt="qris" />
                        </nav>
                    </div>
            </div>
        </section>
    )
}