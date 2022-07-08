import InstantPayment from "../../components/InstantPayment";
import InfoPembayaran from "../../components/InfoPembayaran";
import MetodePembayaran from "../../components/MetodePembayaran";
import WaktuPembayaran from "../../components/WaktuPembayaran";
import GeraiRetail from "../../components/GeraiRetail";
import NavBarBayarDetail from "../../components/NavBarBayarDetail";


export default function tiketPembayaran() {
    return (
    <section>
    <NavBarBayarDetail />
        <section className="bg-gray-200 pt-20 h-screen">
            <WaktuPembayaran />
            <MetodePembayaran />
                <main className="flex">
                    <InstantPayment />
                    <InfoPembayaran />
                </main>
            <GeraiRetail />
        </section>
    </section>
    )
}