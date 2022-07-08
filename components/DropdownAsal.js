import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export default function DropdownAsal() {
    return (
        <Select
            className="focus:outline-[#20c992] relative bottom-5 pl-2"
            placeholder="gambir (GMR) Jakarta"
            showSearch
            style={{ width: 230, margin: '0 60px 0 0' }}
            optionFilterProp="children"
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
            >
            <Option value="1">Gambir (GMR) Jakarta</Option>
            <Option value="2">Bandung (BD) Bandung</Option>
            <Option value="3">Cirebon (CN) Cirebon</Option>
            <Option value="4">Malang (ML) Malang</Option>
            <Option value="5">SemarangPoncol (SMC) Semarang</Option>
            <Option value="6">Yogyakarta (YK) Yogyakarta</Option>
        </Select>
    )
}