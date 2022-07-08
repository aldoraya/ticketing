import Aos from 'aos'
import Image from 'next/image';

export default function Body2(props) {
    return (
        <section className="h-full md:max-w-6xl max-w-md mx-auto bg-white text-black hidden md:block">
            <nav className="w-96 hidden md:absolute left-140 mt-20">
                <Image src="/agreement.png" width={384} height={384} alt="agreement" />
            </nav>
                <div className="md:mx-40 mx-6">
                <div className="md:flex md:justify-between">
                    <h2 className="mt-20 md:mt-80 bg-white md:text-left font-bold text-base md:text-2xl mb-5 md:mr-96">Syarat Naik Kereta Api Perjalanan Jarak Jauh 2022</h2>
                    <nav className="mx-auto mt-10 md:mt-96 md:mx-0 md:absolute md:right-52 md:ml-80">
                        <Image data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center" src="/agreement.png" width={320} height={320} alt="agreement" />
                    </nav>
                </div>
                <div className="text-[#58627a] mt-5 text-xs md:text-sm text-justify md:mr-52 lg:mr-96 md:block md:mx-0">
                    <p className="mx-5 md:ml-0">Mulai pada tanggal 3 Januari 2022 pemerintah mengeluarkan aturan baru sesuai SE Kemenhub No. 97 tahun 2021 sebagai syarat untuk melakukan perjalanan jarak jauh dengan kereta api. Jangan lupa jalankan protokol kesehatan dan mengikuti aturan naik kereta api jarak jauh berikut ini :</p>
                        <ul className="mt-5 list-disc mx-10 md:ml-4">
                            <li>Mulai usia 12 tahun keatas Vaksin minimal dosis pertama. Jika belum mendapatkan vaksin dikarenakan alasan medis harap membawa surat keterangan dari dokter spesialis atau RS Pemerintah. Hasil negatif rapid test antigen 1x24 jam</li>
                            <li className="mt-5 mdmt-0">Dibawah usia 12 tahun (bayi, batita dan balita) Menunjukan hasil negatif rapid test antigen 1x24 jam. Didampingi oleh orang tua</li>
                        </ul>
                </div>
            </div>
        </section>
    )
}