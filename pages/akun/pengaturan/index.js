import NavBar from "../../../components/NavBar";
import NamaUser from "../../../components/NamaUser";
import PengaturanAkun from "../../../components/PengaturanAkun";

export default function Akun() {
    return (
        <>
            <NavBar />
            <section className="bg-gray-200 h-screen w-full">
                <main className="flex p-10 pt-24">
                    <NamaUser />
                    <PengaturanAkun />
                </main>
            </section>  
        </>
    )
}