import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'
import ButtonGagalLogin from "./ButtonGagalLogin"
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';

export default function FormLogin() {

    const loginUser = async event => {
        event.PreventDefault()

    const res = await fetch('api/auth/login', {
        body: JSON.stringify({
            username: event.target.name.value,
            password: event.target.password.value
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    });
    }

    const router = useRouter()

    return (
        <>
            <form onSubmit={loginUser}>
                <div className="border-b border-gray-400 mt-2">
                    <div className='flex pt-3 pb-1'>
                        <AiOutlineMail className='w-6 h-6 text-gray-500'/>
                        <input type="username" name="username" id="username" placeholder="email atau nomer HP" className="pl-4 w-full border-none focus:ring-0 focus:outline-none" required/>
                    </div>
                </div>
                <div className="border-b border-gray-400 mt-2">
                    <div className='flex pt-6 pb-1'>
                        <AiOutlineLock className='w-6 h-6 text-gray-500'/>
                        <input type="password" name="password" id="password" placeholder="password" className="pl-4 w-full border-none focus:border-none focus:ring-0 outline-none text-base" required/>
                    </div>
                </div>
                <div className="text-center mt-7">
                    <p className="flex flex-1 justify-end text-sm">
                        <Link href="/forgot">
                          <a className="text-green-500 sm:hover:text-yellow-400 ">Lupa kata sandi?</a>
                        </Link>
                    </p>
                    <ButtonGagalLogin />
                </div>
            </form>
            <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"/>
            <Script src="/api/auth/form/query.js"/>
            <Script src="/api/login.js"/>
        </>
    )
}