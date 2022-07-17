import Link from "next/link";

export default function ButtonDaftar({ children }) {
    return (
        <Link href="/signUp">
        <a>
           <button className="py-2 px-7 border-2 border-white rounded-2xl text-default bg-[#f7f5f5] hover:bg-transparent hover:text-[#f5f7f7] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-bold">
               DAFTAR
            </button>
            {children}
        </a>
        </Link>
    )
}