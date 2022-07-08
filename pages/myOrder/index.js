import NavBar from "../../components/NavBar";
import NamaUser from "../../components/NamaUser";
import FormOrder from "../../components/FormOrder";

export default function MyOrder() {
    return (
        <>
            <NavBar />
            <section className="bg-gray-200 h-screen w-full">
                <main className="flex p-10 pt-24">
                    <NamaUser />
                    <FormOrder />
                </main>
            </section>  
        </>
    )
}