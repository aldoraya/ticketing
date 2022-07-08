import Link from 'next/link'
import { AiOutlineMail } from "react-icons/ai";

export default function FormForgot() {
    return (
        <>
            <form>
                <div className="border-b border-gray-400">
                    <nav className='relative top-6'>
                        <AiOutlineMail className='w-6 h-6 text-gray-700' />
                    </nav>
                        <input type="email" name="email" id="email" placeholder="masukan email" className="pl-8 w-full pb-2 border-none focus:border-none focus:ring-0 focus:outline-none text-base" required/>
                </div>
                <div className="text-center mt-10">
                    <Link href="/forgot/forgotPassword">
                        <a>
                            <button type="submit" name="forgot" id="forgot" className="btn-primary text-center bg-blue-500 rounded-xl border-2 border-blue-500 w-full py-2 text-white text-sm font-semibold sm:hover:bg-blue-600 sm:hover:border-blue-600">KIRIM</button>
                        </a>
                    </Link>
                </div>
            </form>
        </>
    )
}