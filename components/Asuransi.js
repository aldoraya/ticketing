import { Checkbox } from 'antd';
import Image from 'next/image';

export default function Asuransi() {

    function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    }

    return (
        <section className="bg-white h-max pb-5 w-1/2 ml-10 rounded-sm text-gray-700">
        <div className="px-6">
            <h2 className="py-5 text-2xl font-semibold">Perlindungan Ekstra</h2>
            <form>
                <div className="flex">
                    <nav className="relative bottom-1" >
                        <Image src="/shield.png" width={32} height={32} alt="shield" />
                    </nav>
                    <h3 className="font-bold ml-2">Perlindungan Penuh</h3>
                    <div className="flex flex-1 justify-end">
                        <p className="text-green-500">IDR. 13000</p>
                        <p className="mr-2">/penumpang</p>
                        <Checkbox onChange={onChange}></Checkbox>
                    </div>
                </div>
                <p>Lindungi perjalanan kereta dengan kompensasi santunan s.d. IDR 8.500.000 dan manfaat lainnya</p>
                <button className="text-green-500">Lihat detail</button>
            </form>
            <nav className="border-b border-gray-200 my-5"></nav>
            <form>
                <div className="flex">
                    <nav className='relative bottom-1'>
                        <Image src="/virus.png" width={32} height={32} alt="virus" />
                    </nav>
                    <h3 className="font-bold ml-1">Asuransi COVID-19</h3>
                    <div className="flex flex-1 justify-end">
                        <p className="text-green-500">IDR. 13000</p>
                        <p className="mr-2">/penumpang</p>
                        <Checkbox onChange={onChange}></Checkbox>
                    </div>
                </div>
                <p>Melindunginmu jika kamu didiagnosa positif Covid-19 dengan kompensasi tes swab/PCR, rawat inap, dan lainnya hingga IDR 20.000.000</p>
                <button className="text-green-500">Lihat detail</button>
            </form>
        </div>  
    </section>
    )
}