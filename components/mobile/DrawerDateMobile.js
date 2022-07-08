import { BsCalendarDate } from "react-icons/bs"
import { DatePicker, Space } from 'antd';
import locale from 'antd/lib/locale/id_ID';
import 'moment/locale/id';
import { ConfigProvider } from 'antd';

export default function DrawerDateMobile() {

  return (
    <>
        <div className="focus:outline-none ring-0 w-full h-max relative bottom-3">
            <div className=" text-gray-700 text-xs flex flex-1 justify-start ml-10">
                <nav className="absolute top-5 left-0">
                    <BsCalendarDate className="w-5 h-5" />
                </nav>
                <p id="berangkat" className="text-gray-500 text-xs relative right-2">Berangkat</p>
            </div>
            <div className="flex flex-1 justiy-start pl-5 relative bottom-3">
                <ConfigProvider locale={locale}>
                <Space direction="vertical" size={12}>
                <DatePicker bordered={false} />
                </Space>
              </ConfigProvider>
            </div>
        </div>
    </>
  );
}
