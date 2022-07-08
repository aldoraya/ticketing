import FormLabel from "./FormLabel";
import DropdownAsal from "./DropdownAsal";
import ButtonRotate from "./ButtonRotate";
import DropdownTujuan from "./DropdownTujuan";
import DropdownDate from "./DropdownDate";
import DropdownPenumpang from "./DropdownPenumpang"
import ButtonTiket from "./ButtonTiket";

export default function Form(props) {
    return (
        <div className="max-w-6xl hidden sm:block relative bottom-16 h-64 py-5 bg-white mx-auto mt-5 rounded-xl shadow-xl px-10 z-10">
            <h2 className="font-bold text-3xl mb-10">Pesan Tiket Kereta Online di Ticketing</h2>
            <FormLabel />
            <DropdownAsal />
            <ButtonRotate />
            <DropdownTujuan />
            <DropdownDate />
            <DropdownPenumpang />
            <ButtonTiket />
        </div>
    )
}