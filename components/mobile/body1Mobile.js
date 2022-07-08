import Aos from 'aos'
import Image from "next/image"

export default function Body1Mobile(props) {
    return (
        <section className="h-full md:h-screen max-w-md md:max-w-6xl mx-auto bg-white text-black block md:hidden">
        <div className="md:mx-10 mx-4">
            <h2 className="bg-white text-center font-bold text-base md:text-3xl mb-5 md:mb-14 md:mt-10">Pesan Tiket Kereta Murah Secara online</h2>
                <div className="grid gap-1 grid-cols-1 grid-rows-1 md:gap-3 md:grid-cols-3 md:grid-rows-3">
                    <div className="m-10 md:relative md:-top-8">
                        <nav data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="center" className='flex flex-1 justify-center' >
                            <Image src="/tiket.png" width={128} height={128} alt="tiket" />
                        </nav>
                        <h4 className="text-md md:text-xl font-semibold mt-5 text-center mr-2">Pilihan tiket terlengkap</h4>
                        <p className="mt-2 md:mt-5 text-[#58627a] text-xs text-left md:text-md">Temukan tiket untuk berbagai jenis kereta api dan destinasi lewat Ticketing!.</p>
                    </div>
                    <div className="m-10 mt-5 md:mt-0">
                         <nav data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="center" className='flex flex-1 justify-center' >
                            <Image src="/transaksi.png" width={128} height={128} alt="transaksi" />
                        </nav>
                        <h4 className="text-md md:text-xl font-semibold mt-5 text-center mr-2">Transaksi Aman</h4>
                        <p className="mt-5 text-[#58627a] text-xs md:text-left md:text-md ml-5">Transaksi online di namawebsite dilindungi teknologi SSL dan e-tiket akan dikirm langsung ke e-mail</p>
                    </div>
                    <div className="m-10 mt-5 md:mt-0">
                        <nav  data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="center" className='flex flex-1 justify-center' >
                            <Image src="/antre.png" width={128} height={128} alt="antre" />
                        </nav>
                        <h4 className="text-md md:text-xl font-semibold mt-5 text-center mr-2">Bebas antri</h4>
                        <p className="mt-5 text-[#58627a] text-xs md:text-left md:text-md ml-5">Nggak perlu capek antre di stasiun. Kamu bisa beli tiket kereta dari mana saja, kapan pun kamu mau!.</p>
                    </div>
                    <div className="m-10 mt-5 md:relative md:-top-4 md:mt-4">
                        <nav data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="center" className='flex flex-1 justify-center' >
                            <Image src="/pembayaran.png" width={128} height={128} alt="pembayaran" />
                        </nav>
                        <h4 className="text-md md:text-xl font-semibold mt-3 text-center ml-2 md:ml-0">Beragam metode pembayaran</h4>
                        <p className="mt-5 text-[#58627a] text-xs md:text-left md:text-md ml-5">Lebih mudah pesan tiket lewat Ticketing karena ada banyak pilihan metode pembayaran.</p>
                    </div>
                    <div className="m-10 mt-5 md:mt-5">
                        <nav data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="center" className='flex flex-1 justify-center' >
                            <Image src="/waktu.png" width={128} height={128} alt="waktu" />
                        </nav>
                        <h4 className="text-md md:text-xl font-semibold mt-5 text-center mr-2">Beli tiket lebih awal</h4>
                        <p className="mt-5 text-[#58627a] text-xs md:text-left md:text-md ml-5">Lewat Ticketing, kamu bisa beli tiket kereta untuk semua kelas dan tujuan sejak H-90 keberangkatan.</p>
                    </div>
                    <div className="m-10 mt-5 md:mt-0">
                        <nav data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="center"  className='flex flex-1 justify-center' >
                            <Image src="/kursi.png" width={128} height={128} alt="kursi" />
                        </nav>
                        <h4 className="text-md md:text-xl font-semibold mt-5 text-center mr-2">Bisa pilih kursi</h4>
                        <p className="mt-5 text-[#58627a] text-xs md:text-left md:text-md ml-5">Punya preferensi tempat duduk? Tinggal pilih kursi yang sesuai dengan keinginanmu!</p>
                    </div>
                </div>
        </div>
    </section>
)
}