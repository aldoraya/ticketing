export default function DataPerjalanan() {
    return (
        <main>
        <h2 className="mt-5 w-40 px-2 py-1 text-white bg-yellow-500">DATA PERJALANAN</h2>
        <div className="flex">
            <div className="block mr-1">
                <p className="bg-gray-300 py-2 pr-16 pl-1 mb-1 font-semibold text-left">TANGGAL</p>
                <p className="bg-gray-100 text-left py-2 pr-16 pl-1 text-sm">06 JUNI 2019</p>
            </div>
            <div className="block mr-1">
                <p className="bg-gray-300 py-2 pr-12 pl-1 mb-1 font-semibold text-left">NO KA</p>
                <p className="bg-gray-100 text-left py-2 pr-12 pl-1 text-sm">155</p>
            </div>
            <div className="block mr-1">
                <p className="bg-gray-300 py-2 pr-24 pl-1 mb-1 font-semibold text-left">NAMA KERETA</p>
                <p className="bg-gray-100 text-left py-2 pr-24 pl-1 text-sm">SINGASARI</p>
            </div>
            <div className="block mr-1">
                <p className="bg-gray-300 py-2 pr-24 pl-1 mb-1 font-semibold text-left">BERANGKAT KA</p>
                <p className="bg-gray-100 text-left py-2 pr-24 pl-1 text-sm">06 JUNI 2019, 12:05 KLATEN(KT)</p>
            </div>
            <div className="block">
                <p className="bg-gray-300 py-2 pr-24 pl-1 mb-1 font-semibold text-left">TIBA KA</p>
                <p className="bg-gray-100 text-left py-2 pr-24 pl-1 text-sm">06 JUNI 2019, 23:33 PASAR SENEN(PSE)</p>
            </div>
        </div>
    </main>
    )
}