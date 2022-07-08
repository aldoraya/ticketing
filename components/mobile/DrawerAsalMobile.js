import { Drawer } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import DataStasiun from '../DataStasiun';

export default function DrawerAsalMobile() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <button className="w-full focus:outline-none focus:ring-0" onClick={showDrawer}>
            <label className="ring-0 text-left cursor-pointer top-4">
                <p id="asal" className="text-gray-500 text-xs">Asal</p>
                <h4 id="kodeKereta" className="text-lg font-bold relative bottom-3">GMR</h4>
                <h6 id="kodeStasiun" className="text-sm relative bottom-6">Gambir (GMR)</h6>
            </label>
        </button>
      <Drawer height='32rem' title="Asal" placement="bottom" onClose={onClose} visible={visible}>
        <Input placeholder="Gambir (GMR) Jakarta" prefix={<AiOutlineSearch className="text-gray-400" />}  />
        <h2 className="text-lg font-bold mt-4">STASIUN POPULER</h2>
        <div>
        {DataStasiun.map(({ stasiun, kota }) => (
             <span 
             onClick={onClose}
             key={stasiun}
             className='w-full h-full px-4 py-4 block border-b border-gray-300 text-black font-semibold tetxt-sm'
             >
                {stasiun} <nav className="block text-gray-500 text-xs">{kota}</nav>
             </span> 
            ))}
        </div>
    </Drawer>
    </>
  );
};