export default function DataPemesan() {
    return (
        <div className="block w-full h-max">
        <h3 className="pl-2 bg-yellow-500 text-white w-40">DATA PEMESAN</h3>
        <form action="" className="bg-gray-100 p-4 mr-14">
            <label className="flex">
                <p className="w-40">Nama</p>
                <p>:</p>
                <p className="w-full h-5 pl-2">Fiki</p>
            </label>
            <label className="flex">
                <p className="w-40">Alamat</p>
                <p>:</p>
                <p className="w-full h-5 pl-2">Jalan</p>
            </label>
            <label className="flex">
                <p className="w-40">Telepon</p>
                <p>:</p>
                <p className="w-full h-5 pl-2">0852</p>
            </label>
            <label fclassName="flex">
                <p className="w-40">Tanggal Pesanan</p>
                <p>:</p>
                <p className="w-full h-5 pl-2">08 MAY 2019 12 : 51 12</p>
            </label>
        </form>
    </div>
    )
}