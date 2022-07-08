import NavBarTiket from "../../components/NavBarTiket"
import KodePemesanan from "../../components/KodePemesanan"
import DataPemesan from "../../components/DataPemesan"
import DataPerjalanan from "../../components/DataPerjalanan"
import DataPenumpang from "../../components/DataPenumpang"

export default function tiket() {
    return (
        <section className="h-screen">
            <NavBarTiket />
            <section className="mx-20">
                <section className="w-full h-max bg-white p-5">
                    <main className="flex">
                        <KodePemesanan />
                    <DataPemesan />
                    </main>
                    <DataPerjalanan />
                    <DataPenumpang />
                </section>
            </section>
        </section>
    )
}