import { RiArrowLeftRightLine } from "react-icons/ri";

export default function ButtonRotate() {
    
    return (
        <button id="rotate-button2">
        <div className="relative bottom-1 right-10">
            <input type="button" className="hidden"/>
                <label>
                    <RiArrowLeftRightLine className="cursor-pointer w-10 bg-default rounded-full h-10 p-2 duration-300 text-white" />
                </label>
        </div>
    </button>
    )
}