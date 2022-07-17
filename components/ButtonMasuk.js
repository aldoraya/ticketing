import Link from 'next/link';

export default function ButtonMasuk({ children }) {
    return (
        <div className="hidden sm:block mb-4 sm:mb-0">
            <Link href="/login">
            <a>
                <button className="px-6 py-2 rounded-2xl border-2 border-white text-[#f5f7f7] hover:bg-white hover:text-default transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-bold mr-4">
                    Masuk
                </button>
                {children}
            </a>
            </Link>
        </div>
    )
}