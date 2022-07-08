import DrawerAsalMobile from "./DrawerAsalMobile";
import ButtonSwap from "../ButtonSwap";
import DrawerTujuanMobile from "./DrawerTujuanMobile";
import DrawerDateMobile from "./DrawerDateMobile";
import DrawerPenumpangMobile from "./DrawerPenumpangMobile";
import ButtonTiketMobile from "./ButtonTiketMobile";

export default function FormMobile(props) {
    return (
        <div className="max-w-xs mx-auto z-10 relative bottom-32 block md:hidden">
            <div className="bg-white rounded-xl h-72 mx-4 sm:hidden shadow-2xl">
                <div className="mx-5 h-full">
                    <div className="flex pt-4">
                        <DrawerAsalMobile />
                        <ButtonSwap />
                        <DrawerTujuanMobile />
                    </div>
                        <div className="border-b border-slate-200 mx-3 relative bottom-5"></div>
                        <DrawerDateMobile />
                        <div className="border-b border-slate-200 mx-3 ml-8 relative bottom-5"></div>
                        <DrawerPenumpangMobile />
                        <div className="border-b border-slate-200 mx-3 ml-8 relative bottom-8"></div>
                        <ButtonTiketMobile />
                </div>
            </div>
        </div>
    )
}