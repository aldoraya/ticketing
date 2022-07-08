import Link from 'next/link'

export default function ButtonPesananDetail() {
    return (
        <section className="w-1/2 h-max pb-20 ml-10 text-gray-700">
            <p className="flex flex-1 justify-end">dengan menekan tombol, kamu meyetujui <a className="text-green-500 hover:text-yellow-500 px-1">Syarat dan Ketentuan</a> dari PT. KAI.</p>
            <div className="flex flex-1 justify-end mt-5">
                <button className="text-green-500 hover:text-yellow-500 mr-4">Pilih kursi</button>
                <Link href="/tiketPembayaran">
                <a>
                <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl">LANJUTKAN KE PEMBAYARAN</button>
                </a>
                </Link>
            </div>
        </section>
    )
}