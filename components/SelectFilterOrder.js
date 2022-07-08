import { Select } from 'antd';
import 'antd/dist/antd.css';

export default function SelectFilterOrder() {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  
    return (
      <Select defaultValue="filter" className="w-72 flex py-2 px-2" onChange={handleChange}>
        <Option value="tanggalPemesanan" disabled>Tanggal Pemesanan</Option>
        <Option value="bulanIni">Bulan ini</Option>
        <Option value="bulanLalu">Bulan lalu</Option>
      </Select>
    )        
}