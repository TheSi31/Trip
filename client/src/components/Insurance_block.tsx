'use client';

import {Space, AutoComplete, DatePicker, Button } from "antd";
import PersonSelector from "./PersonSelector";

import './Insurance_block.css';

const { RangePicker } = DatePicker;
  
const Insurance_block = ({ h1_text, option } : { h1_text: string, option: { value: string }[] }) => {
    return (
        <div className="flex flex-col gap-11 items-center w-full">
            <div className="flex flex-col items-center">
                <h1 className="text-white text-4xl font-bold max-sm:text-center max-sm:text-2xl">{h1_text}</h1>
                <p className="text-white text-xl max-sm:text-center max-sm:text-base">Полис, который действительно работает</p>
            </div>
            <div className="flex flex-col items-center gap-11 w-full">
                <Space direction="vertical" className="flex justify-center items-stretch w-4/5 max-sm:flex-col">
                    <Space.Compact  style={{ width: '100%' }} className="max-sm:flex max-sm:flex-col">
                        <AutoComplete className="w-4/5 max-sm:w-full custom-autocomplete" placeholder="Куда едем?" size="large" options={option}  filterOption={(inputValue, option) =>
                            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        } />
                        <RangePicker placeholder={['Начало', 'Конец']} size="large"  style={{ width: '100%' }}/>
                        <PersonSelector/>
                    </Space.Compact>
                </Space>
                <Button className="bg-[#5200d9] text-white border-0 p-6 text-base rounded-none">Узнать стоимость</Button>
            </div>
        </div>
    );
}

export default Insurance_block;

