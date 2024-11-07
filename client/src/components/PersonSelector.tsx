'use client';

import React, { useState } from 'react';
import { Button, Dropdown, InputNumber, Space} from 'antd';
import { DownOutlined } from '@ant-design/icons';

const PersonSelector = () => {
    
  const [childrenUnder3, setChildrenUnder3] = useState(0);
  const [children, setChildren] = useState(0);
  const [adults18to60, setAdults18to60] = useState(0);
  const [adults60Plus, setAdults60Plus] = useState(0);

  const menu = (
    <div style={{ padding: '10px', background: '#fff', borderRadius: '8px' }}>
      <Space direction="vertical">
        <div className='flex items-center justify-between'>
          <span>Дети до 3-х лет</span>
          <InputNumber 
            min={0}
            value={childrenUnder3}
            onChange={setChildrenUnder3}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div className='flex items-center justify-between'>
          <span>Дети</span>
          <InputNumber 
            min={0} 
            value={children} 
            onChange={setChildren} 
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div className='flex items-center justify-between'>
          <span>Взрослые (от 18 до 60 лет)</span>
          <InputNumber 
            min={0}
            value={adults18to60} 
            onChange={setAdults18to60} 
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div className='flex items-center justify-between'>
          <span>Взрослые (от 60 до 70 лет)</span>
          <InputNumber 
            min={0} 
            value={adults60Plus} 
            onChange={setAdults60Plus} 
            style={{ marginLeft: '10px' }}
          />
        </div>
      </Space>
    </div>
  );


  const totalPeople =
    childrenUnder3 + children + adults18to60 + adults60Plus;

  return (
    <Dropdown overlay={menu} trigger={['click']} className='max-sm:rounded-none'>
      <Button size='large'>
        {totalPeople} человек <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default PersonSelector;
