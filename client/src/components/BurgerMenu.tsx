'use client';

import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

type BurgerMenuProps = {
  items: any;
};

const BurgerMenu = ({ items }: BurgerMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='md:hidden'>
      <MenuOutlined className="hidden max-md:block text-white text-xl" onClick={toggleMenu} />

      {isMenuOpen && (
        <div className="absolute top-20 right-5 bg-white p-5 rounded-lg shadow-lg z-50">
          <Menu items={items} />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
