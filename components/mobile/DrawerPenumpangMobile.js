import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import { FaBaby } from "react-icons/fa";
import { Drawer } from 'antd';

export default function DrawerPenumpangMobile() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  
    function decrementClick() {
      setCount(count + 1);
    }
  
    function incrementClick() {
      setCount(count - 1);
    }
  
     function decrementClick2() {
      setCount2(count2 + 1);
    }
  
    function incrementClick2() {
      setCount2(count2 - 1);
    }

     const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
  
     const menu = () => {
       return (
         <>
     
        </>
       )
     }  

     return (
      <div className="block md:hidden">
         <div className="relative bottom-3 w-full h-full ring-0">
  	      <div className="pb-3">
            <p className="text-left ml-8 text-gray-500 text-xs">Jumlah Penumpang</p>
            <nav className="absolute top-6 left-0">
                    <FaUser className="w-5 h-5" />
            </nav>
            <button className="mx-2 ml-8" onClick={showDrawer}>
              <p className="text-black relative bottom-1">{count} Dewasa, {count2} bayi</p>  
            </button>
          </div>
        </div>
        <Drawer title="Jumlah Penumpang" height={280} placement="bottom" onClose={onClose} visible={visible}>
        <div className="relative bottom-5">
        <div className="w-full h-full bg-white flex border-b border-gray-200 py-2">
          <nav className="mr-4 mt-3">
            <FaUser className="w-4 h-4 text-gray-700" />
          </nav>
            <div className="block">
              <h2 className="semibold text-sm">Dewasa</h2>
              <p className="text-xs relative bottom-2">Usia 3 tahun ke atas</p>
            </div>
            <div className='flex flex-1 justify-end'>
              <button className="w-6 h-6 rounded-full bg-[#20c992] focus:bg-green-500 relative top-2 text-white" onClick={incrementClick}>-</button>
                <div className="border-b border-gray-300 mx-2 relative bottom-4">
                  <nav className="relative top-6 mx-4">{count}</nav>
                </div>
              <button className="w-6 h-6 rounded-full bg-[#20c992] focus:bg-green-500 relative top-2 text-white" onClick={decrementClick}>+</button>
            </div>
        </div>
        <div className="w-full h-full bg-white flex py-2 border-b border-gray-200">
          <nav className="mr-4 mt-2">
            <FaBaby className="w-5 h-5" />
          </nav>
            <div className="block">
              <h2 className="semibold text-sm">Bayi</h2>
              <p className="text-xs relative bottom-2">Usia di bawa 3 tahun</p>
            </div>
            <div className='flex flex-1 justify-end'>
              <button className="w-6 h-6 rounded-full bg-[#20c992] focus:bg-green-500 relative top-2 text-white" onClick={incrementClick2}>-</button>
              <div className="border-b border-gray-300 mx-2 relative bottom-4">
                <nav className="relative top-6 mx-4">{count2}</nav>
              </div>
                <button className="w-6 h-6 rounded-full bg-[#20c992] focus:bg-green-500 relative top-2 text-white" onClick={decrementClick2}>+</button>
            </div>
          </div>
          </div>
          <button onClick={onClose} className="w-full py-2 bg-[#20c992] focus:bg-green-500 rounded-md text-center text-white font-semibold">Simpan</button>
        </Drawer>
      </div>
      );
}