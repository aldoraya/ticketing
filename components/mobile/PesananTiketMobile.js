import Link from 'next/link'
import { BsArrowLeft } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdKeyboardArrowDown} from "react-icons/md";

export default function PesananTiketMobile() {
    return (
        <div className="block md:hidden">
        <section className="w-full mx-auto h-max fixed bg-white p-2 shadow-lg pb-3 md:hidden">
        <div className="flex my-2 mx-2">
          <Link href="/">
          <a>
            <BsArrowLeft className="w-6 h-6 text-gray-700" />
          </a>
          </Link>
          <div className="block pl-4">
            <h2 className="text-base font-bold">Gambir - Bandung</h2>
              <div className="flex text-sm text-gray-700">
                <p>Sel, 29 Mar 2022 | </p>
                <p className="pl-1">Dewasa</p>
              </div>
          </div>
            <div className="max-w-sm flex flex-1 justify-end">
              <BiPencil className="w-6 h-6 text-gray-700" />
            </div>
        </div>
        <div className="flex text-sm overflow-x-auto no-scrollbar mt-4">
            <p className="border border-gray-300 text-gray-500 rounded-xl py-1 px-5 text-base mr-2 flex">
              <GiSettingsKnobs className="mt-1 mr-2" /> Filter
            </p>
            <p className="border border-gray-300 text-gray-500 rounded-xl py-1 px-4 text-base mr-2">Ekonomi</p>
            <p className="border border-gray-300 text-gray-500 rounded-xl py-1 px-4 text-base mr-2">Eksekutif</p>
            <p className="border border-gray-300 text-gray-500 rounded-xl py-1 px-4 text-base mr-2">Bisnis</p>
         </div>
      </section>
  
      <section className="max-w-md mx-auto block sm:hidden pt-40">
        <div className="p-4">
          <h3 className="text-sm">Argo Parahyangan</h3>
          <p className="text-xs">Ekonomi (Q)</p>
          <div className="flex mt-4 ml-1">
            <nav className="rounded-full w-4 h-4 border border-[#20c992] mt-1"></nav>
            <p className="ml-2 font-bold text-sm">06:40</p>
            <p className="ml-2 text-sm">GMR</p>
          </div>
          <div className="flex my-1">
            <nav className="border-x border-bg-gray-200 ml-2"></nav>
            <p className="text-gray-700 text-xs ml-4 my-2">2j 40m</p>
            <div className="flex flex-1 justify-end">
            <p className="font-bold text-sm">Rp.90.000/</p>
            <p className="text-gray-700 text-xs">orang</p>
            </div>
          </div>
          <div className="flex ml-1">
            <nav className="rounded-full w-4 h-4 border bg-[#20c992] mt-1"></nav>
            <p className="ml-2 font-bold text-sm">09:20</p>
            <p className="ml-2 text-sm">BD</p>
            <div className="flex flex-1 justify-end">
              <div className="bg-gray-300 rounded-lg p-1">
                <MdKeyboardArrowDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="max-w-md block sm:hidden">
        <nav className="h-0.5 w-full bg-gray-200"></nav>
      </section>
  
      <section className="max-w-md mx-auto block sm:hidden">
        <div className="p-4">
          <h3 className="text-sm">Argo Parahyangan</h3>
          <p className="text-xs">Eksekutif (Q)</p>
          <div className="flex mt-4 ml-1">
            <nav className="rounded-full w-4 h-4 border border-[#20c992] mt-1"></nav>
            <p className="ml-2 font-bold text-sm">06:40</p>
            <p className="ml-2 text-sm">GMR</p>
          </div>
          <div className="flex my-1">
            <nav className="border-x border-bg-gray-200 ml-2"></nav>
            <p className="text-gray-700 text-xs ml-4 my-2">2j 40m</p>
            <div className="flex flex-1 justify-end">
            <p className="font-bold text-sm">Rp.90.000/</p>
            <p className="text-gray-700 text-xs">orang</p>
            </div>
          </div>
          <div className="flex ml-1">
            <nav className="rounded-full w-4 h-4 border bg-[#20c992] mt-1"></nav>
            <p className="ml-2 font-bold text-sm">09:20</p>
            <p className="ml-2 text-sm">BD</p>
            <div className="flex flex-1 justify-end">
              <div className="bg-gray-300 rounded-lg p-1">
                <MdKeyboardArrowDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="max-w-md mx-auto">
        <nav className="h-0.5 w-full bg-gray-200"></nav>
      </section>
  
      <section className="max-w-md mx-auto block sm:hidden">
        <div className="p-4">
          <h3 className="text-sm">Argo Parahyangan</h3>
          <p className="text-xs">Bisnis (Q)</p>
          <div className="flex mt-4 ml-1">
            <nav className="rounded-full w-4 h-4 border border-[#20c992] mt-1"></nav>
            <p className="ml-2 font-bold text-sm">06:40</p>
            <p className="ml-2 text-sm">GMR</p>
          </div>
          <div className="flex my-1">
            <nav className="border-x border-bg-gray-200 ml-2"></nav>
            <p className="text-gray-700 text-xs ml-4 my-2">2j 40m</p>
            <div className="flex flex-1 justify-end">
            <p className="font-bold text-sm">Rp.90.000/</p>
            <p className="text-gray-700 text-xs">orang</p>
            </div>
          </div>
          <div className="flex ml-1">
            <nav className="rounded-full w-4 h-4 border bg-[#20c992] mt-1"></nav>
            <p className="ml-2 font-bold text-sm">09:20</p>
            <p className="ml-2 text-sm">BD</p>
            <div className="flex flex-1 justify-end">
              <div className="bg-gray-300 rounded-lg p-1">
                <MdKeyboardArrowDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="max-w-md mx-auto">
        <nav className="h-0.5 w-full bg-gray-200"></nav>
      </section>
    </div>
    )
}