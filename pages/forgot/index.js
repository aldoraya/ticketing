import Link from 'next/link'
import Head from 'next/head'
import FormForgot from "../../components/FormForgot"
import { BsArrowLeft } from "react-icons/bs";

export default function Forgot() {
    return (
    <section className='md:bg-[#20c992]'>
        <Head>
            <title>Forgot</title>
        </Head>

    <main className="max-w-md md:max-w-6xl h-screen mx-auto md:py-28">
        <div className="md:mx-10">
            <nav className="p-4 block md:hidden">
                <Link href="/">
                    <a>
                        <BsArrowLeft className="w-6 h-6" />
                    </a>
                </Link>
            </nav>
            <div className="md:flex md:flex-1 md:justify-center">
                <div className="form-putih bg-white md:py-8 px-4 md:px-14 md:w-96 md:rounded-2xl md:shadow-2xl">
                    <h1 className="text-xl font-semibold mr-3 md:mr-0 pb-4">Atur ulang kata sandi</h1>
                    <p className="text-base text-[#58627a] px-0">Masukkan e-mail yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.</p>
                    <FormForgot />
                </div>
            </div>
        </div>
    </main>
</section>
    )
}