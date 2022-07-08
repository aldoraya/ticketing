import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

export default function FilterKereta() {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    return (
        <main className="w-2/5 h-max ml-20 mr-2">
        <div className="bg-white w-full h-max px-5 ronded-sm">
                    <h2 className="py-2 font-semibold text-base">Kelas</h2>
                    <div className="flex text-base text-gray-700">
                        <p>Ekonomi</p>
                        <nav className="flex flex-1 justify-end">
                            <Checkbox onChange={onChange}></Checkbox>
                        </nav> 
                    </div>  
                    <div className="flex text-base text-gray-700">
                        <p>Bisnis</p>
                        <nav className="flex flex-1 justify-end">
                            <Checkbox onChange={onChange}></Checkbox>
                        </nav> 
                    </div>  
                    <div className="flex text-base text-gray-700">
                        <p>Eksekutif</p>
                        <nav className="flex flex-1 justify-end">
                            <Checkbox onChange={onChange}></Checkbox>
                        </nav> 
                    </div>  
                    <nav className="border-b border-b-gray-200 my-2"></nav>
                    <h2 className="py-2 font-semibold text-base">Waktu</h2>
                    <div className="flex text-base text-gray-700">
                        <p>00.00 - 06.00</p>
                        <nav className="flex flex-1 justify-end">
                            <Checkbox onChange={onChange}></Checkbox>
                        </nav> 
                    </div>  
                    <div className="flex text-base text-gray-700">
                        <p>06.00 - 12.00</p>
                        <nav className="flex flex-1 justify-end">
                            <Checkbox onChange={onChange}></Checkbox>
                        </nav> 
                    </div>  
                    <div className="flex text-base text-gray-700">
                        <p>12.00 - 18.00</p>
                        <nav className="flex flex-1 justify-end">
                            <Checkbox onChange={onChange}></Checkbox>
                        </nav> 
                    </div> 
                    <div className="flex text-base text-gray-700">
                        <p>18.00 - 24.00</p>
                        <nav className="flex flex-1 justify-end">
                            <Checkbox onChange={onChange}></Checkbox>
                        </nav> 
                    </div>
                    <nav className="border-b border-b-gray-200 my-2"></nav>
                        <h2 className="py-2 font-semibold text-base">Nama Kereta</h2>
                        <div className="flex text-base text-gray-700">
                            <p>Serayu</p>
                            <nav className="flex flex-1 justify-end">
                                <Checkbox onChange={onChange}></Checkbox>
                            </nav> 
                        </div>  
                        <div className="flex text-base text-gray-700">
                            <p>Blabla</p>
                            <nav className="flex flex-1 justify-end">
                                <Checkbox onChange={onChange}></Checkbox>
                            </nav> 
                        </div>  
                </div>
   </main>
    )
}