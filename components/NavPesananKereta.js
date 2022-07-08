import { Menu, Dropdown, message } from 'antd';
import 'antd/dist/antd.css';
import { FaSortAmountDownAlt } from "react-icons/fa";

export default function NavPesananKereta() {
    const onClick = ({ key }) => {
        message.info(`${key}`);
      };
      
      const menu = (
        <Menu onClick={onClick} className="w-60">
          <Menu.Item key="Harga Terendah">Harga Terendah</Menu.Item>
          <Menu.Item key="Waktu keberangkatan Terawal">Waktu Keberangkatan Terawal</Menu.Item>
          <Menu.Item key="Waktu Kerbeangakan Terakhir">Waktu Keberangkatan Terakhir</Menu.Item>
          <Menu.Item key="Perjalanan Tercpeat">Perjalanan Tercepat</Menu.Item>
          <Menu.Item key="Perjalanan Terlama">Perjalanan Terlama</Menu.Item>
          <Menu.Item key="Waktu Tiba Terawal">Waktu Tiba Terawal</Menu.Item>
          <Menu.Item key="Waktu Tiba Terakhir">Waktu Tiba Terakhir</Menu.Item>
        </Menu>
      );
    return (
        <main className="mx-20 mt-10">
            <div className="flex text-black text-lg">
                    <div className="w-2/5 h-max">
                        <div className="flex">
                            <p className="font-semibold">Filter</p>
                            <nav className="flex flex-1 justify-end">
                            <button className="text-green-500 hover:text-yellow-500 font-semibold relative bottom-2">RESET</button>
                            </nav>
                        </div>  
                    </div>
                    <nav className="mx-2"></nav>
                    <div className="w-full h-max">
                        <div className="flex">
                            <p className="">menampilkan semua kereta ke tujuanmu</p>
                            <Dropdown className="absolute right-20" overlay={menu}>
                            <a className="ant-dropdown-link flex" onClick={e => e.preventDefault()}>
                            <p className="mr-2 text-gray-700">Urutkan</p>
                            <FaSortAmountDownAlt className="w-6 h-6 text-gray-700" />
                            </a>
                            </Dropdown>
                        </div>
                    </div>
            </div>
        </main>
    )
}