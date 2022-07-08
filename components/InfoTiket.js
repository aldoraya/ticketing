import Image from "next/image"

export default function InfoTiket() {
    return (
        <section className="max-w-lg my-10 h-max py-5 px-5 bg-white ml-16 rounded-sm">
        <div className="flex">
            <h2 className="text-2xl font-semibold">Kereta</h2>
            <nav className="flex flex-1 justify-end">
            <button className="text-green-500 hover:text-yellow-500 relative bottom-1">Detail</button>
            </nav>
        </div>
        <div className="flex pt-4 text-gray-700">
            <nav  className="relative bottom-1 mr-2">
                <Image src="/logo-kai.png" width={32} height={24} alt="logo-kai" />
            </nav>
            <p>GMR - CMI</p>
            <p className="px-2 relative bottom-1">.</p>
            <p>Kam, 07 Apr 2022</p>
            <p className="px-2 relative bottom-1">.</p>
            <p>18:30</p>
        </div>
        <div className="pt-5">
            <h2 className="text-base font-semibold text-gray-900">Harga</h2>
            <p className="pt-1 font-semibold text-gray-900">Pergi</p>
            <div className="flex text-gray-700 relative bottom-2">
                <p>Dewasa(x1)</p>
                <p className="flex flex-1 justify-end">IDR 125.000</p>
            </div>
        </div>
        <nav className="border-b mb-4"></nav>
        <div>
            <h2 className="text-base font-semibold pb-2 text-gray-900">Biaya lainnya</h2>
            <div className="flex text-gray-700 relative bottom-2">
                <p>Biaya layanan penumpang</p>
                <p className="flex flex-1 justify-end">Gratis</p>
            </div>
            <div className="flex relative bottom-4">
                <p>Pajak</p>
                <p className="flex flex-1 justify-end">Termasuk</p>
            </div>
        </div>
        <nav className="border-b mb-4"></nav>
        <div className="flex text-gray-900">
            <p>Total Pembayaran</p>
            <p className="text-2xl pb-2 font-bold text-green-500 flex flex-1 justify-end">IDR 125.000</p>
        </div>
    </section>
    )
}