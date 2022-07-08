import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import FormSignUp from "../../components/FormSignUp"

export default function SignUp() {
  
  return (
    <section className="md:bg-[#20c992]">
    <Head>
      <title>Sign-up</title>
    </Head>
  
    <main className="h-screen max-w-md md:max-w-7xl mx-auto md:py-8">
    <p className="welcome text-white text-right mb-5 hidden md:block md:mr-52">Selamat Datang!</p>
    <div className="md:flex">
    <div className="bg-yellow-300 opacity-50 w-full ml-24 my-4 z-10 hidden md:block"></div>
      <nav className="absolute top-20 mt-3 left-32 ml-3 h-max hidden md:block">
        <Image src="/register.jpg" width={750} height={479} alt="regsiter" />
      </nav>
        <div className="md:flex md:flex-1 md:justify-end md:mr-20">
            <div className="form-putih bg-white h-max px-4 md:pt-6 md:pb-4 md:px-14 md:w-96 md:h-max md:rounded-2xl md:shadow-2xl md:z-20">
                <div className="flex py-4 md:hidden">
                    <h2 className="text-base md:text-xl font-semibold">Daftar</h2>
                    <p className="flex flex-1 justify-end">
                      <Link href="/login">
                        <a className="text-green-500 md:hover:text-yellow-500 text-md md:text-base ">Masuk</a>
                      </Link>
                    </p>
                </div>
                <div className="hidden md:block">
                    <h2 className="text-center text-base md:text-xl font-semibold">Daftar Sekarang</h2>
                    <p className="text-md md:text-base text-center text-gray-700 mt-1">Sudah punya akun Ticketing?
                    <Link href="/login">
                     <a className="text-green-500 md:hover:text-yellow-500 md:pl-1">masuk</a>
                    </Link>
                     </p>
                </div>
                  <FormSignUp />
                  <div className="text-md md:text-md text-center mt-5 text-gray-700">
                      <p>Dengan mendaftar saya menyutujui</p>
                      <p className="relative bottom-3"><a href="" className="text-green-500 md:hover:text-yellow-400">syarat dan ketentuan</a> serta <a href="" className="text-green-500 md:hover:text-yellow-400">kebijakan privasi</a></p>
                  </div>
                </div>
            </div>
            </div>
          </main>
      </section>
  )
}