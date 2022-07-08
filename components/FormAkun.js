import Link from 'next/link'
import { MdVerified } from "react-icons/md";
import { Select } from 'antd';

export default function FormAkun() {
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    return (
        <section className="w-full h-max bg-white p-5 ml-16">
        <h2 className="font-semibold text-xl text-gray-900">Detail Akun</h2>
        <p>Di sini kamu bisa mengatur detail akunmu</p>
        <div className="mt-5 flex">
            <div className="block bg-green-100 bg-opacity-40 p-5 h-max w-full">
                <div className="block">
                    <p className="text-sm text-gray-700">Email</p>
                    <p className="text-gray-700 text-base">namaemail@gmail.com</p>
                </div>
                <div className="block mt-4">
                    <div className="flex">
                        <p className="text-gray-700 text-sm">Nomor Ponsel</p>
                        <p className="text-xs ml-2 text-blue-500">Verified</p>
                        <MdVerified className="text-blue-500 relative ml-2" />
                    </div>
                    <p className="text-gray-700 text-base">+6212346789101112</p>
                </div>
                <nav className="border-b border-gray-300 w-full mt-4"></nav>
            </div>
            <div className="block w-full h-max ml-10">
                <div>
                    <label className="text-sm text-gray-400">Title</label>
                    <Select defaultValue="Tuan" className="border border-gray-300 px-2 py-2 w-full" onChange={handleChange}>
                        <Option value="Tuan">Tuan</Option>
                        <Option value="Nyonya">Nyonya</Option>
                        <Option value="Nona">Nona</Option>
                    </Select>
                </div>
                <div className="mt-2">
                    <label className="text-sm text-gray-400">Nama depan</label>
                    <input type="text" className="border border-gray-300 px-2 py-1 w-full focus:outline-none"/>
                </div>
                <div className="mt-2">
                    <label className="text-sm text-gray-400">Nama Belakang</label>
                    <input type="text" className="border border-gray-300 px-2 py-1 w-full focus:outline-none"/>
                </div>
                <div className="mt-6">
                    <input type="text" placeholder="Nomor KTP" className="border border-gray-300 px-2 py-2 w-full focus:outline-none"/>
                </div>
                <div className="mt-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <input type="email" className="border border-gray-300 px-2 py-1 w-full focus:outline-none"/>
                </div>
                <div className="mt-2">
                    <label className="text-sm text-gray-400">No telepon</label>
                    <input type="text" className="border border-gray-300 px-2 py-1 w-full focus:outline-none"/>
                </div>
                <div className="flex flex-2 justify-end mt-8">
                    <button className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white">SIMPAN</button>
                </div>
            </div>
        </div>
    </section>
    )
}