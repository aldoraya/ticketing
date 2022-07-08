import NavBarPesananDetail from "../components/NavBarPesananDetail";
import FormAsuransi from "./FormAsuransi";
import FormDetailPemesanan from "./FormDetailPemesanan";
import FormDetailPenumpang from "./FormDetailPenumpang";
import FormKereta from "./FormKereta";
import ButtonPesananDetail from "./ButtonPesananDetail";
import WaktuPemesanan from "./WaktuPemesanan"

export default function PesananDetail() {
    return (
        <section className="hidden sm:block">
            <NavBarPesananDetail />
            <section className="bg-slate-200 pt-20">
                <WaktuPemesanan />
                    <main className="grid gap-2 grid-cols-2">
                        <FormDetailPemesanan />
                        <FormKereta />
                        <FormDetailPenumpang />
                    </main>
                <FormAsuransi />
                <ButtonPesananDetail />
            </section>
        </section>
    )
}