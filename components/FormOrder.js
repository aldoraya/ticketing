import SelectFilterOrder from "./SelectFilterOrder";
import SelectTanggal from "./SelectTanggal";

export default function FormOrder() {
    return (    
        <>
            <section className="w-full h-max bg-white p-5 ml-16 pb-10">
                <h2 className="text-xl font-semibold text-gray-900">My Order</h2>
                <nav className="py-1 border-b border-gray-200"></nav>
                <div className="flex mt-5">
                 <SelectFilterOrder />
                    <div className="flex flex-1 justify-end">
                        <button className="text-green-500 hover:text-yellow-500 top-2 text-base mr-2">Urutkan</button>
                       <SelectTanggal />
                        <button className="text-green-500 hover:text-yellow-500 relative top-1 text-base ml-2">RESET</button>
                    </div>
                </div>
            </section>
       
            <div className="w-2/3 absolute right-10 top-52 h-80 bg-white block mt-14 z-10">
            </div>
        </>
    )
}