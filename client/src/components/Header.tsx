'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import icon from '../img/icon.svg';
import icon_black from '../img/icon_black.svg'

import { Dropdown} from 'antd';
import { CaretDownOutlined, MailOutlined } from '@ant-design/icons';

import BurgerMenu from './BurgerMenu';

import './Header.css';

const items = [
  {
    key: '1',
    label: (
      <Link href="https://www.antgroup.com">Страхование для Шенгена</Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href="https://www.aliyun.com">Страхование в России</Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href="https://www.luohanacademy.com">Горнолыжная страховка</Link>
    ),
  },
  {
    key: '4',
    label: <Link href="/insurance" className="text-white">Годовая страховка</Link>,
  },
];

const burger_item = [
    {
        key: '1',
        label: 'Продукты',
        children: [
            {
                key: '2',
                label: (
                  <Link href="https://www.antgroup.com">Страхование для Шенгена</Link>
                ),
              },
              {
                key: '3',
                label: (
                  <Link href="https://www.aliyun.com">Страхование в России</Link>
                ),
              },
              {
                key: '4',
                label: (
                  <Link href="https://www.luohanacademy.com">Горнолыжная страховка</Link>
                ),
              },
              {
                key: '5',
                label: <Link href="/insurance" className="text-white">Годовая страховка</Link>,
              },
        ],
    },
    {
        key: '6',
        label: (
            <Link href="/menu/reviews" className="text-white">Отзывы</Link>
        ),
    },
    {
        key: '7',
        label: (
            <Link href="/menu/partners" className="text-white">Партнеры</Link>
        ),
    },
    {
        key: '8',
        label: (
            <Link href="/discounts" className="text-white border border-white rounded-md px-2 py-1">Скидки</Link>
        )
    }
]

const Header = () => {

  const pathname = usePathname();
  const isPurpleBackground = pathname === '/menu/reviews';

  if(isPurpleBackground){
    console.log('sss')
  }

  return (
    <header className="flex justify-center w-full bg-transparent absolute">
      <div className="flex justify-between items-center py-11  w-4/5 font-inter max-md:w-full">
        <Link href="/" className="ms-3">
          <div className='flex relative'>
            <h1 className="z-10 w-36">trip страхование</h1>
            {isPurpleBackground ? <Image src={icon_black} width={74} height={67} alt="logo" className='absolute -z-0 -top-10 -left-3.5' /> : <Image src={icon} width={74} height={67} alt="logo" className='absolute -z-0 -top-10 -left-3.5' />}
          </div>
        </Link>

        <Dropdown menu={{ items }} className="max-md:hidden" overlayClassName="custom-dropdown">
          <h1 className="flex justify-center gap-1">
            Продукты <CaretDownOutlined style={{ fontSize: '10px' }} />
          </h1>
        </Dropdown>

        <Link href="/menu/reviews" className="max-md:hidden">Отзывы</Link>
        <Link href="/menu/partners" className="max-md:hidden">Партнеры</Link>
        <Link href="/discounts" className="border border-white rounded-md px-2 py-1 max-md:hidden">
          <MailOutlined /> Скидки
        </Link>

        <BurgerMenu items={burger_item} />

      </div>
    </header>
  );
};

export default Header;

