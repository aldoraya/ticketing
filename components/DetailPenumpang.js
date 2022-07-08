export default function DetailPenumpang() {
    return (
    <section className="bg-white h-max pb-5 mb-10 w-full ml-10 rounded-sm">
    <div className="mx-6">
        <div className="flex">
            <svg className="w-10 h-10 p-1 mt-5 border brder-gray-300 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
            </svg>
            <h2 className="py-5 text-2xl font-semibold ml-2">Detail Penumpang</h2>
        </div>
        <p className="mt-4 max-w-3xl h-12 pt-3 pl-4 bg-blue-100">Penumpang 1: Dewasa</p>
        <form action="" className="">
            <div className="mt-5">
                <input type="text" placeholder="Nama Lengkap" className="w-full p-2  border border-gray-200 focus:outline-none"/>
                <p className="text-sm text-gray-700">seperti di ktp atau di paspor (tanpa tanda baca dan gelar)</p>
            </div>  
            <div className="mt-5">
                <p>title</p>
                <input type="text" placeholder="Tuan" className="w-full p-2  border border-gray-200 focus:outline-none relative bottom-2"/>
            </div>  
            <div className="mt-5">
                <p>Identitas</p>
                <input type="text" placeholder="KTP" className="w-full p-2  border border-gray-200 focus:outline-none relative bottom-2"/>
            </div>  
            <div className="mt-4">
                <input type="text" placeholder="nomor NIK" className="w-full p-2  border border-gray-200 focus:outline-none"/>
                <p className="text-sm text-gray-700">KAI butuh NIK untuk sertifikasi hasil tes COVID-19</p>
            </div>  
        </form>
    </div>  
</section>
    )
}