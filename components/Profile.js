import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { AiOutlineUser } from "react-icons/ai";

export default function Profile() {

    const menu = (
        <>
        <div className="flex flex-1 justify-center">
            <div className="block">
                <AiOutlineUser className="w-6 h-6" />
                <p>(nama user)</p>
                <p>8.000</p>
            </div>
        </div>
        <nav className="border-b border-gray-400 w-full"></nav>
        <Menu>
          <Menu.Item key="0">
            <a>My Order</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a>Smart Profile</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a>Smart Pay</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a>Daftar Refund</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a>My Review</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a>Pengaturan</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a>Keluar</a>
          </Menu.Item>
          <Menu.Divider />
        </Menu>
        </>
      );

    return (
    <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <nav className="p-5 rounded-full bg-gray-200">
          <AiOutlineUser className="w-6 h-6" />
        </nav>
        </a>
    </Dropdown>
    )

}