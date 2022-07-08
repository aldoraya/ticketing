import NavBar from "../../components/NavBar";
import NamaUser from "../../components/NamaUser";
import FormAkun from "../../components/FormAkun";

export default function Akun() {
    return (
        <>
            <NavBar />
            <section className="bg-gray-200 min-h-full w-full">
                <main className="flex p-10 pt-24">
                    <NamaUser />
                    <FormAkun />
                </main>
            </section>  
        </>
    )
}