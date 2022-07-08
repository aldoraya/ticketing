import Link from 'next/link'
import ButtonBerhasilPassword from './ButtonBerhasilPassword'
import { AiOutlineLock } from "react-icons/ai"

export default function FormPassword() {
    return (
        <form>
        <div className="border-b border-gray-400 mt-4">
            <nav className='relative top-6'>
                <AiOutlineLock className="w-6 h-6 text-gray-500" />
            </nav>
            <input type="password" name="password" id="password" placeholder="password" className="pl-8 w-full pb-2 border-none focus:border-none focus:ring-0 focus:outline-none text-base" required/>
        </div>
        <div className="border-b border-gray-400 mt-2">
            <nav className='relative top-6'>
                <AiOutlineLock className="w-6 h-6 text-gray-500" />
            </nav>
            <input type="password" name="verification" id="verification" placeholder="password" className="pl-8 w-full pb-2 border-none focus:border-none focus:ring-0 focus:outline-none text-base" required/>
        </div>
        <div className="text-center mt-10">
            <ButtonBerhasilPassword />
        </div>
    </form>
    )
}