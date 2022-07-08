import { DatePicker, Space } from 'antd';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/id_ID';
import 'moment/locale/id';

export default function DropdownDate() {
      
      return (
        <div className="flex flex-1 justify-center">
          <div className="relative bottom-14 mt-1 left-36 ml-3">
          <ConfigProvider locale={locale}>
          <Space direction="vertical">
              <DatePicker className="w-56 h-8 hover:ring-0"/>
          </Space>
          </ConfigProvider>
          </div>
        </div>
      ); 
}
