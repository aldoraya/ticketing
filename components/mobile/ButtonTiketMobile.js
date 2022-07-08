import Link from 'next/link';

export default function ButtonTiketMobile() {
    return (
    <div className="w-full h-full block md:hidden">
        <Link href="/tiketPemesanan">
            <a>
                 <button className="w-full py-2 bg-[#20c992] focus:bg-green-500 rounded-md text-center text-white font-semibold relative bottom-4">Cari Tiket</button>
            </a>
        </Link>
    </div>
    )
}