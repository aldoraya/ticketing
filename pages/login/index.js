import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import FormLogin from "../../components/FormLogin"
import { BsArrowLeft } from "react-icons/bs";

export default function Login() {

  const router = useRouter()

  return (
    <>
    <section className="md:bg-[#20c992]">
      <Head>
        <title>Login</title>
      </Head>

      <main className="h-screen max-w-md md:max-w-7xl mx-auto md:py-8">
        <p className="welcome text-white text-center mb-5 hidden md:block">Selamat Datang!</p>
          <div className="md:flex md:flex-1 md:justify-center">
            <nav className="p-4 block md:hidden">
              <Link href="/">
              <a>
                <BsArrowLeft className="w-6 h-6" />
              </a>
              </Link>
            </nav>
                <div className="form-putih bg-white h-max px-4 md:px-14 md:py-4 md:w-96 md:rounded-2xl md:shadow-2xl">
                    <div className="md:flex md:flex-1 md:justify-center">
                        <h2 className="text-base md:text-xl font-semibold">Masuk</h2>
                        <p className="flex flex-1 justify-end">
                          <Link href="/signUp">
                          <a className="text-green-500 md:hover:text-yellow-500 text-md md:text-base relative bottom-4 md:block md:bottom-0">Daftar</a>
                          </Link>
                        </p>
                    </div>
                    <nav className="pl-4 absolute top-20 mt-11 md:top-40 md:mt-6"></nav>
                      <button action="/api/auth/google" onClick={() => router.push('/api/auth/google')} className="google border-2 border-bg-gray-900 w-full rounded-2xl md:hover:bg-gray-300 cursor-pointer flex h-12 py-2 mt-4">
                        <FcGoogle className="w-6 h-6 ml-2" />
                           <p className="text-md md:text-base flex flex-1 justify-center font-semibold mr-4">Google</p>
                      </button>
                    <div className="line border-gray-200 border-b-2 mt-8"></div>
                    <p className="text-gray-700 text-md md:text-base text-center mt-5">atau masuk dengan</p>
                      <FormLogin />
                    <div className="text-md text-center my-5 text-gray-700">
                        <p>Butuh bantuan? Hubungi <a href="" className="text-green-500 md:hover:text-yellow-400">Ticketing</a></p>
                    </div>
                  </div>
                </div>
      </main>
    </section>
    </>
  )
}