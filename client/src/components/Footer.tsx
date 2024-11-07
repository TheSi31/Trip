import React from 'react';
import Image from 'next/image';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import youtube from '../img/youtube.png';
import vk from '../img/vk.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import tiktok from '../img/tiktok.png';
import instagram from '../img/instagram.png';
import telegram from '../img/telegram.png';
import whatsapp from '../img/whatsapp.png';

const Footer = () => {

    const items:CollapseProps['items'] =[
        {
            key: '1',
            label: 'Информационный центр',
            children: <div>
                <p>О нас</p>
                <p>Контакты</p>
                <p>Конфиденциальность</p>
            </div>
        },
        {
            key: '2',
            label: 'Продукты',
            children: <div>
                <p>Страховка для Шенгена</p>
                <p>Страховка для России</p>
                <p>Страховка в страны</p>
                <p>Горнолыжная страховка</p>
                <p>Годовая страховка</p>
            </div>
        },
        {
            key: '3',
            label: 'Документы',
            children: <div>
                <p>Пользовательское соглашение</p>
                <p>Политика обработки данных</p>
                <p>Политика информационной безопасности</p>
            </div>
        }
    ]




    return (
        <footer className="flex justify-center w-full h-full p-10 mt-36 border-t border-[#5200d9] max-sm:justify-normal max-sm:p-2">
            <div className='grid grid-cols-4 gap-8 grid-flow-row-dense max-md:grid-cols-3 max-md:gap-4 max-sm:hidden'>
                <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-base font-bold max-md:text-sm'>Информационный центр</h1>
                    <p className='max-md:text-sm'>О нас</p>
                    <p className='max-md:text-sm'>Отзывы</p>
                    <p className='max-md:text-sm'>Партнерам</p>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-base font-bold max-md:text-sm'>Продукты</h1>
                    <p className='max-md:text-sm'>Страховка для Шенгена</p>
                    <p className='max-md:text-sm'>Страховка для России</p>
                    <p className='max-md:text-sm'>Страховка в страны</p>
                    <p className='max-md:text-sm'>Горнолыжная страховка</p>
                    <p className='max-md:text-sm'>Годовая страховка</p>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-base font-bold max-md:text-sm'>Документы</h1>
                    <p className='max-md:text-sm'>Пользовательское соглашение</p>
                    <p className='max-md:text-sm'>Политика обработки данных</p>
                    <p className='max-md:text-sm'>Политика информационной безопасности</p>
                </div>
                <div className='w-full flex flex-col gap-2 max-md:col-span-4 max-md:flex-row max-md:gap-1'>
                    <h1 className='text-base font-bold max-md:text-sm'>Связаться с нами</h1>
                    <div className='grid grid-cols-4 gap-4 max-md:grid-cols-8 max-md:grid-rows-1'>
                        <Image src={youtube} alt="youtube" className='w-[32px] h-[32px]' />
                        <Image src={vk} alt="vk" className='w-[32px] h-[32px]' />
                        <Image src={facebook} alt="facebook" className='w-[32px] h-[32px]' />
                        <Image src={twitter} alt="twitter" className='w-[32px] h-[32px]' />
                        <Image src={tiktok} alt="tiktok" className='w-[32px] h-[32px]' />
                        <Image src={instagram} alt="instagram" className='w-[32px] h-[32px]' />
                        <Image src={telegram} alt="telegram" className='w-[32px] h-[32px]' />
                        <Image src={whatsapp} alt="whatsapp" className='w-[32px] h-[32px]' />
                    </div>
                </div>
            </div>
            <div className='hidden max-sm:block max-sm:w-full'>
                <Collapse items={items} ghost expandIconPosition="end"/>
                <div className='w-2/4 flex flex-col gap-2 mx-4'>
                    <h1 className='text-base font-bold max-md:text-sm'>Связаться с нами</h1>
                    <div className='grid grid-cols-4 gap-4'>
                        <Image src={youtube} alt="youtube" className='w-[32px] h-[32px]' />
                        <Image src={vk} alt="vk" className='w-[32px] h-[32px]' />
                        <Image src={facebook} alt="facebook" className='w-[32px] h-[32px]' />
                        <Image src={twitter} alt="twitter" className='w-[32px] h-[32px]' />
                        <Image src={tiktok} alt="tiktok" className='w-[32px] h-[32px]' />
                        <Image src={instagram} alt="instagram" className='w-[32px] h-[32px]' />
                        <Image src={telegram} alt="telegram" className='w-[32px] h-[32px]' />
                        <Image src={whatsapp} alt="whatsapp" className='w-[32px] h-[32px]' />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
