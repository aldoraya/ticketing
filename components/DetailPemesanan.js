import Image from 'next/image'

export default function DetailPemesanan() {
    return (
        <section className="bg-white h-max pb-10 w-full my-10 ml-10 rounded-sm">
        <div className="mx-6">
            <div className="flex">
            <svg className="w-10 h-10 mt-5 p-1 rounded-full border border-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"/>
            </svg>
            <h2 className="py-5 text-2xl font-semibold ml-2 text-gray-900">Detail Pemesanan</h2>
            </div>
            <form>
                <div className="mt-5">
                    <input type="text" placeholder="nama pemesanan" className="w-full p-2  border border-gray-200 focus:outline-none"/>
                    <p className="text-sm text-gray-700">seperti di ktp atau di paspor</p>
                </div>  
                <div className="mt-6">
                    <p classNam="text-gray-700 text-sm">title</p>
                    <input type="text" placeholder="Tuan" className="w-full p-2 relative bottom-3 border border-gray-200 focus:outline-none"/>
                </div>  
                <div className="mt-5">
                    <p className="text-sm text-gray-700">Kode negara</p>
                    <div className="flex relative bottom-3">
                    <nav className='relative top-3 z-10 ml-2'>
                        <Image src="/indo.png" width={32} height={24} alt="indonesia" />
                    </nav>
                    <input type="text" placeholder="(+62)" className="w-32 pl-12 p-2 border border-gray-200 focus:outline-none relative right-10"/>
                    <input type="text" placeholder="no ponsel" className="w-full p-2 border border-gray-200 focus:outline-none"/>
                    </div>  
                </div>  
                <div className="mt-6">
                    <input type="email" placeholder="email" className="w-full p-2  border border-gray-200 focus:outline-none"/>
                    <p className="text-sm text-gray-700">E-ticket akan dikirim ke pemesanan ini</p>
                </div>  
            </form>
        </div>  
    </section>
    )
}