import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Divider from '@material-ui/core/Divider';
import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SideBarMobile() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <button onClick={showDrawer}>
        <AiOutlineMenu className="w-8 h-8" />
      </button>
      <Drawer placement="left" onClose={onClose} visible={visible}>
        <div className="py-3 px-4 text-lg" onClick={onClose}>
        <Link href="/">
            <a className=" font-semibold flex">
                Beranda
                <nav className="flex flex-1 justify-end">
                    <MdKeyboardArrowRight className="w-6 h-6" />
                </nav>
            </a>
        </Link>
        </div>
        <Divider />
        <div className="py-3 px-4 text-lg" onClick={onClose}>
        <Link href="/">
            <a className=" font-semibold flex">
                Daftar Transaksi
                <nav className="flex flex-1 justify-end">
                    <MdKeyboardArrowRight className="w-6 h-6" />
                </nav>
            </a>
        </Link>
        </div>
        <Divider />
        <div className="py-3 px-4 text-lg" onClick={onClose}>
        <Link href="/">
            <a className=" font-semibold flex">
                Promo
                <nav className="flex flex-1 justify-end">
                    <MdKeyboardArrowRight className="w-6 h-6" />
                </nav>
            </a>
        </Link>
        </div>
        <Divider />
        <div className="py-3 px-4 text-lg" onClick={onClose}>
        <Link href="/">
            <a className=" font-semibold flex">
                Inspirasi Wisata
                <nav className="flex flex-1 justify-end">
                    <MdKeyboardArrowRight className="w-6 h-6" />
                </nav>
            </a>
        </Link>
        </div>
        <Divider />
        <div className="py-3 px-4 text-lg" onClick={onClose}>
        <Link href="/signUp">
            <a className=" font-semibold flex">
                Akun
                <nav className="flex flex-1 justify-end">
                    <MdKeyboardArrowRight className="w-6 h-6" />
                </nav>
            </a>
        </Link>
        </div>
        <Divider />
        <div className="py-3 px-4 text-lg" onClick={onClose}>
        <Link href="/">
            <a className=" font-semibold flex">
                Bantuan
                <nav className="flex flex-1 justify-end">
                    <MdKeyboardArrowRight className="w-6 h-6" />
                </nav>
            </a>
        </Link>
        </div>
        <Divider />
      </Drawer>
    </>
  );
};