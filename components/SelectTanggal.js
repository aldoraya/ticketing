import { Select } from 'antd';
import 'antd/dist/antd.css';

export default function SelectTanggal() {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

    return (
      <Select defaultValue="Baru saja dibeli" className="w-72 flex py-2 px-2 mx-2" onChange={handleChange}>
        <Option value="Tuan">Baru saja dibeli</Option>
        <Option value="Nona">Tanggal Terdekat</Option>
      </Select>
    )        
}