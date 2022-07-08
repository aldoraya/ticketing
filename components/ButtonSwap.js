import { IoIosSwap } from 'react-icons/io'

export default function ButtonSwap() {
    return (
        <button className="flex flex-1 justify-center mt-3" id="rotate-button">
            <IoIosSwap id="sample" className="w-9 bg-gray-200 rounded-full h-9 p-2 duration-300" />
        </button>
    )
}