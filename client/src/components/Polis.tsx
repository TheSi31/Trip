import Image from "next/image";

import Polis1 from '../img/Polis1.svg';
import Polis2 from '../img/Polis2.svg';
import Polis3 from '../img/Polis3.svg';
import Polis4 from '../img/Polis4.svg';

const Polis = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-white text-black mb-24 mt-24">
            <h1 className="text-3xl font-semibold p-10">Как купить полис?</h1>
            <div className="grid grid-cols-4 gap-5 max-lg:gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                <div className="flex flex-col justify-center items-center relative w-60 h-60 bg-[#eee6fc] gap-2 max-lg:w-48 max-lg:h-48 max-[800px]:w-44 max-[800px]:h-44  max-md:w-full max-md:h-48">
                    <h1 className="absolute top-1 left-1 font-extrabold text-8xl text-[#decff8] max-lg:text-7xl">1</h1>
                    <Image src={Polis1} alt="Полис" className="w-[114px] h-[114px] max-lg:w-[80px] max-lg:h-[80px]"></Image>
                    <p className="text-center w-3/4 max-lg:text-sm">Рассчитайте онлайн стоимость полиса</p>
                </div>
                <div className="flex flex-col justify-center items-center relative w-60 h-60 bg-[#eee6fc] gap-2 max-lg:w-48 max-lg:h-48 max-[800px]:w-44 max-[800px]:h-44  max-md:w-full max-md:h-48">
                    <h1 className="absolute font-extrabold top-1 left-1 text-8xl text-[#decff8] max-lg:text-7xl">2</h1>
                    <Image src={Polis2} alt="Полис" className="w-[114px] h-[114px] max-lg:w-[80px] max-lg:h-[80px]"></Image>
                    <p className="text-center w-3/4 max-lg:text-sm">Введите данные о вашей поездке</p>
                </div>
                <div className="flex flex-col justify-center items-center relative w-60 h-60 bg-[#eee6fc] gap-2 max-lg:w-48 max-lg:h-48 max-[800px]:w-44 max-[800px]:h-44  max-md:w-full max-md:h-48">
                    <h1 className="absolute font-extrabold top-1 left-1 text-8xl text-[#decff8] max-lg:text-7xl">3</h1>
                    <Image src={Polis3} alt="Полис" className="w-[114px] h-[114px] max-lg:w-[80px] max-lg:h-[80px]"></Image>
                    <p className="text-center w-3/4 max-lg:text-sm">Оплатите полис через интернет</p>
                </div>
                <div className="flex flex-col justify-center items-center relative w-60 h-60 bg-[#eee6fc] gap-2 max-lg:w-48 max-lg:h-48 max-[800px]:w-44 max-[800px]:h-44  max-md:w-full max-md:h-48">
                    <h1 className="absolute font-extrabold top-1 left-1 text-8xl text-[#decff8] max-lg:text-7xl">4</h1>
                    <Image src={Polis4} alt="Полис" className="w-[114px] h-[114px] max-lg:w-[80px] max-lg:h-[80px]"></Image>
                    <p className="text-center w-3/4 max-lg:text-sm">Получите полис на e-mail и распечатайте</p>
                </div>
            </div>
        </div>
    );
}

export default Polis;