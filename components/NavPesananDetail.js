import { MdKeyboardArrowRight } from "react-icons/md"

export default function NavPesananDetail() {
    return (
        <div className="flex flex-1 justify-center">
            <p>1. Pesan</p>
            <MdKeyboardArrowRight className="w-6 h-6" />
            <p>2. Bayar</p>
            <MdKeyboardArrowRight className="w-6 h-6" />
            <p>3. Selesai</p>
            <MdKeyboardArrowRight className="w-6 h-6" />
        </div>
    )
}