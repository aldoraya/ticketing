import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 32,
    }}
    spin
  />
);

function Loading(props) {
    return (
    <div className="w-full h-screen bg-white bg-opacity-40 z-50">
        <nav className="flex flex-col justify-center items-center w-full h-screen">
            <Spin indicator={antIcon} tip="Loading..." />
        </nav>
    </div>
    )
}

export default Loading;
