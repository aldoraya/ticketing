import Link from 'next/link'

export default function ButtonTiket() {
    return (
    <div className="flex flex-1 justify-center sm:justify-end pr-3">
        <Link href="/tiketPemesanan">
            <a>
                <button className="relative sm:bottom-14 w-full sm:w-40 px-5 py-2 bg-default text-white rounded-xl hover:bg-green-500 focus:outline-none">Cari Tiket</button>
            </a>
        </Link>
    </div>
    )
}