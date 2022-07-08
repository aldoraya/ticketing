import Header from 'next/head'
import NavBarPesananDetail from "../../components/NavBarPesananDetail";
import WaktuPemesanan from "../../components/WaktuPemesanan"
import DetailPemesanan from "../../components/DetailPemesanan";
import InfoTiket from "../../components/InfoTiket";
import DetailPenumpang from "../../components/DetailPenumpang";
import Asuransi from "../../components/Asuransi";
import ButtonPesananDetail from "../../components/ButtonPesananDetail";

export default function detailPemesanan() {
    return (
        <>
         <Header>
                <title>Detail Pemesanan</title>
        </Header>
        <section className="hidden md:block font-sans">
            <NavBarPesananDetail />
                <section className="bg-slate-200 pt-20">
                    <WaktuPemesanan />
                        <main className="grid gap-2 grid-cols-2">
                            <DetailPemesanan />
                            <InfoTiket />
                            <DetailPenumpang />
                        </main>
                    <Asuransi />
                    <ButtonPesananDetail />
                </section>
        </section>
        </>
    )
}