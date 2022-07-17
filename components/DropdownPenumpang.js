import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { BiUser } from "react-icons/bi";
import { FaBaby } from "react-icons/fa";

export default function DropdownPenumpang() {
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

   const menu = () => {
     return (
       <>
      <div className="w-full min-h-full bg-white flex p-5 relative right-10">
        <nav className="realtive right-2 top-2">
          <BiUser className="w-6 h-6" />
        </nav>
          <div className="block">
            <h2 className="semibold text-sm">Dewasa</h2>
            <p className="text-xs relative bottom-2">Usia 3 tahun ke atas</p>
          </div>
          <div className='flex flex-1 justify-end'>
          <button className="w-6 h-6 rounded-full bg-green-400 relative top-2 text-white" onClick={incrementClick}>-</button>
          <div className="border-b border-gray-300 mx-2 relative bottom-4">
          <nav className="relative top-6 mx-4">{count}</nav>
          </div>
          <button className="w-6 h-6 rounded-full bg-green-400 relative top-2 text-white" onClick={decrementClick}>+</button>
          </div>
        </div>
        <div className="w-72 min-h-full bg-white flex px-5 relative right-10 bottom-4">
        <nav className="realtive right-2 top-2">
          <FaBaby className="w-6 h-6" />
        </nav>
          <div className="block">
            <h2 className="semibold text-sm">Bayi</h2>
            <p className="text-xs relative bottom-2">Usia di bawa 3 tahun</p>
          </div>
          <div className='flex flex-1 justify-end'>
          <button className="w-6 h-6 rounded-full bg-green-400 relative top-2 text-white" onClick={incrementClick2}>-</button>
          <div className="border-b border-gray-300 mx-2 relative bottom-4">
          <nav className="relative top-6 mx-4">{count2}</nav>
          </div>
          <button className="w-6 h-6 rounded-full bg-green-400 relative top-2 text-white" onClick={decrementClick2}>+</button>
          </div>
      </div>
      </>
     )
   }
  
  return (
    <div className="flex flex-1 justify-end pr-3">
    <div className="relative bottom-24 pt-2">
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <div className="flex">
          <div className="border border-gray-300 rounded-sm w-56 h-8 py-2 px-4 hover:border-blue-400 focus:border-blue-600">
          <p className="text-gray-600 relative bottom-1">{count} Dewasa, {count2} bayi</p>  
            <nav className="flex flex-1 justify-end">
              <div className="relative bottom-10 text-gray-300">
              <DownOutlined />
              </div>
            </nav>
          </div>
        </div>
      </a>
    </Dropdown>
      </div>
    </div>
  );
}