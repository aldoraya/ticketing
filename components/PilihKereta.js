import { Dropdown } from 'antd';
import Link from 'next/link'
import { BsCircle } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

export default function PilihKereta() {

    const perjalanan = (
        <div className="w-screen ml-12 relative bottom-5">
        <div className="bg-white h-max px-5 mr-36 ml-96 shadow-lg">
        <nav className="border-b w-full bg-gray-400 mb-4"></nav>
            <div className="flex px-5">
                <div className="block">
                    <p className="font-semibold">00:44</p>
                    <p className="relative bottom-4">11 Apr</p>
                </div>
                <nav className=""></nav>
                <p className="ml-5">Bekasi (BKS)</p>
            </div>
            <div className="flex px-5">
                <div className="block">
                    <p className="py-10">17m</p>
                </div>
                <nav className=""></nav>
                <div className="ml-5 p-5 bg-blue-300 opacity-50 text-black">
                    <p className="font-semibold">Matarmaja (281)</p>
                    <p>Ekonomi (SubsClass C)</p>
                </div>
            </div>
            <div className="flex px-5 mt-8">
                <div className="block">
                    <p className="font-semibold">01:01</p>
                    <p className="relative bottom-4">11 Apr</p>
                </div>
                <nav className=""></nav>
                <p className="ml-5">Jatinegara (JNG)</p>
            </div>
        </div>
      </div>
    )

    const harga = (
      <div className="w-screen ml-12 relative bottom-5">
          <div className="bg-white h-max px-5 mr-36 ml-96 shadow-lg">
          <nav className="border-b w-full bg-gray-400 mb-4"></nav>
          <p>Tarif</p>
          <div className="flex text-;g">
          <p>Mataraja</p>
          <p>-</p>
          <p>Ekonomi (Subclass C)</p>
          </div>
          <div className="flex text-gray-700">
              <p>Dewasa (x2)</p>
              <p className="flex flex-1 justify-end">IDR 90.000</p>
          </div>
          <h2 className="mt-4 text-lg">Biaya Lainnya</h2>
          <div className="flex text-gray-700">
              <p>Biaya Layanan Penumpang</p>
              <p className="flex flex-1 justify-end">GRATIS</p>
          </div>
          <div className="flex text-gray-700">
              <p>Pajak</p>
              <p className="flex flex-1 justify-end">Termasuk</p>
          </div>
          <nav className="border-b w-full bg-gray-400 my-4"></nav>
          <div className="flex text-gray-700 text-base">
              <p>Total</p>
              <p className="flex flex-1 justify-end text-green-500">IDR 90.000</p>
          </div>
          </div>
        </div>
      )

    return (
        <main className="w-full h-max mr-20 ml-2 overflow-hidden">
        <div className="bg-white w-full h-max rounded-sm">
                         <div className="px-8 py-4 flex">
                             <nav className="block">
                             <p className="text-base font-semibold text-gray-900">Argo Parahyangan 42</p>
                             <p className="text-sm relative bottom-2 text-gray-700">Ekonomi (Subclass Q)</p>
                             </nav>
                             <div className="flex flex-1 justify-center">
                                 <div className="block">
                                     <p className="text-lg font-semibold text-gray-900">18:30</p>
                                     <p className="relative bottom-5 text-gray-700">GMR</p>
                                     <Dropdown overlay={perjalanan} trigger={['click']}>
                                        <a className="ant-dropdown-link text-sm text-green-500 hover:text-yellow-500" onClick={e => e.preventDefault()}>
                                        <p className="mt-2">Detail Perjalanan</p>
                                        </a>
                                    </Dropdown>
                                 </div>
                                 <nav className="relative right-7">
                                     <div className="flex">
                                        <BsCircle className="w-2 h-2 relative top-3 right-1" />
                                        <p>.........</p>
                                        <GrLocation className="w-5 h-5 text-gray-700" />
                                     </div>  
                                 </nav>
                                 <div className="block">
                                     <p className="text-lg font-semibold text-gray-900">20:58</p>
                                     <p className="relative bottom-5 text-gray-700">CMI</p>
                                     <Dropdown overlay={harga} trigger={['click']}>
                                        <a className="ant-dropdown-link text-sm text-green-500 hover:text-yellow-500" onClick={e => e.preventDefault()}>
                                        <p className="mt-2">Detail Harga</p>
                                        </a>
                                    </Dropdown>
                                 </div>
                             </div>
                             <div className="flex fex-1 justfy-end">
                                 <nav className="block">
                                 <p className="font-semibold text-green-500 text-lg">IDR 90.000</p>
                                <Link href="/detailPemesanan">
                                <a>
                                <button className="rounded-xl mt-7 text-white px-6 py-2 bg-yellow-400 hover:bg-yellow-500">Pilih</button>
                                </a>
                                </Link>
                                 </nav> 
                             </div>
                         </div>
                     </div>
                     <nav className="border-b border-b-gray-300"></nav>
                     <div className="bg-white w-full h-max rounded-sm">
                         <div className="px-8 py-4 flex">
                             <nav className="block">
                             <p className="text-base font-semibold text-gray-900">Argo Parahyangan 42</p>
                             <p className="text-sm relative bottom-2 text-gray-700">Ekonomi (Subclass Q)</p>
                             </nav>
                             <div className="flex flex-1 justify-center">
                                 <div className="block">
                                     <p className="text-lg font-semibold text-gray-900">18:30</p>
                                     <p className="relative bottom-5 text-gray-700">GMR</p>
                                     <Dropdown overlay={perjalanan} trigger={['click']}>
                                        <a className="ant-dropdown-link text-sm text-green-500 hover:text-yellow-500" onClick={e => e.preventDefault()}>
                                        <p className="mt-2">Detail Perjalanan</p>
                                        </a>
                                    </Dropdown>
                                 </div>
                                 <nav className="relative right-7">
                                     <div className="flex">
                                        <BsCircle className="w-2 h-2 relative top-3 right-1" />
                                        <p>.........</p>
                                        <GrLocation className="w-5 h-5 text-gray-700" />
                                     </div>  
                                 </nav>
                                 <div className="block">
                                     <p className="text-lg font-semibold text-gray-900">20:58</p>
                                     <p className="relative bottom-5 text-gray-700">CMI</p>
                                     <Dropdown overlay={harga} trigger={['click']}>
                                        <a className="ant-dropdown-link text-sm text-green-500 hover:text-yellow-500" onClick={e => e.preventDefault()}>
                                        <p className="mt-2">Detail Harga</p>
                                        </a>
                                    </Dropdown>
                                 </div>
                             </div>
                             <div className="flex fex-1 justfy-end">
                                 <nav className="block">
                                 <p className="font-semibold text-green-500 text-lg">IDR 90.000</p>
                                <Link href="/detailPemesanan">
                                <a>
                                <button className="rounded-xl mt-7 text-white px-6 py-2 bg-yellow-400 hover:bg-yellow-500">Pilih</button>
                                </a>
                                </Link>
                                 </nav> 
                             </div>
                         </div>
                     </div>
                     <nav className="border-b border-b-gray-300"></nav>
                     <div className="bg-white w-full h-max rounded-sm">
                         <div className="px-8 py-4 flex">
                             <nav className="block">
                             <p className="text-base font-semibold text-gray-900">Argo Parahyangan 42</p>
                             <p className="text-sm relative bottom-2 text-gray-700">Ekonomi (Subclass Q)</p>
                             </nav>
                             <div className="flex flex-1 justify-center">
                                 <div className="block">
                                     <p className="text-lg font-semibold text-gray-900">18:30</p>
                                     <p className="relative bottom-5 text-gray-700">GMR</p>
                                     <Dropdown overlay={perjalanan} trigger={['click']}>
                                        <a className="ant-dropdown-link text-sm text-green-500 hover:text-yellow-500" onClick={e => e.preventDefault()}>
                                        <p className="mt-2">Detail Perjalanan</p>
                                        </a>
                                    </Dropdown>
                                 </div>
                                 <nav className="relative right-7">
                                     <div className="flex">
                                        <BsCircle className="w-2 h-2 relative top-3 right-1" />
                                        <p>.........</p>
                                        <GrLocation className="w-5 h-5 text-gray-700" />
                                     </div>  
                                 </nav>
                                 <div className="block">
                                     <p className="text-lg font-semibold text-gray-900">20:58</p>
                                     <p className="relative bottom-5 text-gray-700">CMI</p>
                                     <Dropdown overlay={harga} trigger={['click']}>
                                        <a className="ant-dropdown-link text-sm text-green-500 hover:text-yellow-500" onClick={e => e.preventDefault()}>
                                        <p className="mt-2">Detail Harga</p>
                                        </a>
                                    </Dropdown>
                                 </div>
                             </div>
                             <div className="flex fex-1 justfy-end">
                                 <nav className="block">
                                 <p className="font-semibold text-green-500 text-lg">IDR 90.000</p>
                                <Link href="/detailPemesanan">
                                <a>
                                <button className="rounded-xl mt-7 text-white px-6 py-2 bg-yellow-400 hover:bg-yellow-500">Pilih</button>
                                </a>
                                </Link>
                                 </nav> 
                             </div>
                         </div>
                     </div>        
                </main>
    )
}