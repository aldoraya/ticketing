import Link from 'next/link'

export default function Nav() {
    return (
        <ul className="text-[hsl(240,11%,96%)] font-semibold text-sm hidden sm:flex flex-1 justify-end items-center gap-8 mr-8 my-5 z-20">
            <Link href="/">
            <a>
                <li className="text-[rgb(243,247,253)] hover:text-white text-base">Home</li>
            </a>
           </Link>
           <Link href="/myOrder">
            <a>
                <li className="text-[rgb(243,247,253)] hover:text-white text-base">Cek Order</li>
            </a>
           </Link>
        </ul>
    )
}

