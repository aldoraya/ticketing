import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export default function DropdownTujuan() {
    return (
        <Select
            className="relative bottom-5 right-5"
            placeholder="Bandung (BD) Bandung"
            showSearch
            style={{ width: 230 }}
            optionFilterProp="children"
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
            >
            <Option value="1">Bandung (BD) Bandung</Option>
            <Option value="2">Cirebon (CN) Cirebon</Option>
            <Option value="3">Gambir (GMR) Jakarta</Option>
            <Option value="4">Malang (ML) Malang</Option>
            <Option value="5">SemarangPoncol (SMC) Semarang</Option>
            <Option value="6">Yogyakarta (YK) Yogyakarta</Option>
        </Select>
    )
}