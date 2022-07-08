import Aos from 'aos'
import Image from "next/image"

export default function Body2Mobile(props) {
    return (
        <section className="h-full sm:max-w-6xl max-w-md mx-auto bg-white text-black block md:hidden">
            <div className="sm:mx-40 mx-6">
                <div className="sm:flex sm:justify-between">
                    <h2 className="mt-20 sm:mt-80 bg-white sm:text-left font-bold text-base sm:text-2xl mb-5 sm:mr-96">Syarat Naik Kereta Api Perjalanan Jarak Jauh 2022</h2>
                    <nav className="flex flex-1 justify-center mt-10"  
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center">
                        <Image src="/agreement.png" width={160} height={160} alt="agreement" priority />
                    </nav>
                </div>
                <div className="text-[#58627a] mt-5 text-xs sm:text-sm text-justify sm:mr-96 sm:block sm:mx-0">
                    <p className="mx-5 sm:ml-0">Mulai pada tanggal 3 Januari 2022 pemerintah mengeluarkan aturan baru sesuai SE Kemenhub No. 97 tahun 2021 sebagai syarat untuk melakukan perjalanan jarak jauh dengan kereta api. Jangan lupa jalankan protokol kesehatan dan mengikuti aturan naik kereta api jarak jauh berikut ini :</p>
                        <ul className="mt-5 list-disc mx-10 sm:ml-4">
                            <li>Mulai usia 12 tahun keatas Vaksin minimal dosis pertama. Jika belum mendapatkan vaksin dikarenakan alasan medis harap membawa surat keterangan dari dokter spesialis atau RS Pemerintah. Hasil negatif rapid test antigen 1x24 jam</li>
                            <li className="mt-5 smmt-0">Dibawah usia 12 tahun (bayi, batita dan balita) Menunjukan hasil negatif rapid test antigen 1x24 jam. Didampingi oleh orang tua</li>
                        </ul>
                </div>
            </div>
        </section>
    )
}