import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { BackTop } from 'antd'

export default function BackToTop(props) {
  return (
    <BackTop>
      <div className='p-1 bg-default rounded-full z-20'>
        <MdKeyboardArrowUp className="text-white w-8 h-8" />
      </div>
    </BackTop>
  );
}
