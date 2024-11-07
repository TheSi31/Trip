import Image from "next/image";
import Link from "next/link";

import offer_1 from "../../../img/offer_1.svg";
import offer_2 from "../../../img/offer_2.svg";
import offer_3 from "../../../img/offer_3.svg";

import idea_bro from "../../../img/idea_bro.svg";

import widget from "../../../img/widget.svg";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const reviews = [
    {
      id: 1,
      name: 'Иван Иванов',
      text: 'Все понравилось. Спасибо за отличную страховку Все понравилось. Спасибо за отличную страховку Все понравилось. Спасибо за отличную страховку Все понравилось. Спасибо за отличную страховку Все понравилось. Спасибо за отличную страховку Все понравилось. Спасибо за отличную страховку Все понравилось. Спасибо за отличную страховку',
      stars: 5,
      date : '2022-01-01'
    },
    {
      id: 2,
      name: 'Петр Петров',
      text: 'Все понравилось кроме отношения к лечению. Спасибо за отличную страховку',
      stars: 4.5,
      date : '2022-02-01'
    },
    {
      id: 3,
      name: 'Андрей Андреев',
      text: 'Все не понравилось. Спасибо за испортичного полиса',
      stars: 0.5,
      date : '2022-03-01'
    },
    {
      id: 4,
      name: 'Иван Иванов',
      text: 'Все понравилось. Спасибо за отличную страховку',
      stars: 5,
      date : '2022-01-01'
    },
    {
      id: 5,
      name: 'Петр Петров',
      text: 'Все понравилось кроме отношения к лечению. Спасибо за отличную страховку',
      stars: 4.5,
      date : '2022-02-01'
    },
    {
      id: 6,
      name: 'Андрей Андреев',
      text: 'Все не понравилось. Спасибо за испортичного полиса',
      stars: 0.5,
      date : '2022-03-01'
    },
  ]


const page = () => {
    return (
        <main className="flex flex-col items-center justify-center bg-[url('../img/back_partners.jpg')] bg-no-repeat bg-cover bg-fixed">
            <div className="flex h-screen w-full flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-white text-4xl font-bold max-sm:text-center max-sm:text-2xl">Партнерская программа</h1>
                    <p className="text-white text-xl font-light max-sm:text-center max-sm:text-base">Продажа туристических страховок для сайтов, турфирм, агентств </p>
                    <button className="bg-[#5200d9] text-white border-0 px-5 py-3 text-base rounded-none">Регистрация онлайн</button>
                    <p className="text-white text-lg max-sm:text-center max-sm:text-base">или войти <Link href="#" className="underline">здесь</Link></p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-full text-black">
                <div className="flex flex-col items-center w-4/6 mb-32 mt-16 gap-5">
                    <h1 className="text-black text-4xl font-bold max-sm:text-center max-sm:text-2xl">Что мы предлагаем?</h1>
                    <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
                        <div className="flex flex-col justify-center items-center">
                            <Image src={offer_1} alt="оффер 1"></Image>
                            <h2 className="text-2xl font-medium text-center max-md:font-semibold">Страхование путешественников</h2>
                            <p className="text-base font-light text-center max-md:text-2xl">Страховка для получения визы и не только</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={offer_2} alt="оффер 2"></Image>
                            <h2 className="text-2xl font-medium text-center max-md:font-semibold">Страхование отмены <br/> поездки</h2>
                            <p className="text-base font-light text-center max-md:text-2xl">Компенсация, если срывается поездка</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={offer_3} alt="оффер 3"></Image>
                            <h2 className="text-2xl font-medium text-center max-md:font-semibold">Продукт Лайт<br/> для профи</h2>
                            <p className="text-base font-light text-center max-md:text-2xl">Специальный продукт для турагентов</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-[#d7e5ff] w-full">
                    <div className="w-4/6 max-lg:w-11/12">
                        <h1 className="text-black text-3xl font-bold text-center mt-8 max-sm:text-center max-sm:text-2xl">Как это работает?</h1>
                        <div className="grid grid-cols-2 max-sm:grid-rows-2 max-sm:grid-cols-1">
                            <div>
                                <ul className="flex flex-col justify-evenly h-full py-5">
                                    <li className="flex items-center text-xl font-light before:inline-flex before:items-center before:justify-center before:content-['1'] before:h-24 max-lg:before:h-16 before:rounded-full before:border-[#5200d959] before:border-[1px] before:text-[#5200d959] before:text-7xl max-lg:before:text-5xl before:mr-2 before:aspect-square before:box-border">
                                        Зарегистрируйтесь и получите доступ к личному кабинету
                                    </li>
                                    <li className="flex items-center text-xl font-light before:inline-flex before:items-center before:justify-center before:content-['2'] before:h-24 max-lg:before:h-16 before:rounded-full before:border-[#5200d959] before:border-[1px] before:text-[#5200d959] before:text-7xl max-lg:before:text-5xl before:mr-2 before:aspect-square">
                                        Выберите способ интеграции
                                    </li>
                                    <li className="flex items-center text-xl font-light before:inline-flex before:items-center before:justify-center before:content-['3'] before:h-24 max-lg:before:h-16 before:rounded-full before:border-[#5200d959] before:border-[1px] before:text-[#5200d959] before:text-7xl max-lg:before:text-5xl before:mr-2 before:aspect-square">
                                        Зарабатывайте до 25% от стоимости полиса
                                    </li>
                                </ul>
                            </div>
                            <Image src={idea_bro} alt="idea_bro"></Image>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 w-4/6 mt-36 mb-12 max-lg:w-11/12">
                    <h1 className="text-black text-4xl font-bold text-center">Размещение виджета</h1>
                    <p className="text-black text-base font-light text-center max-md:text-xl">Виджет – это графический элемент интерфейса, который позволит перемещаться с Вашего сайта на наш портал. Также он проинформирует пользователей о рейтинге и наличии отзывов.</p>
                    <Image src={widget} alt="Виджет"></Image>
                </div>
                <Reviews reviewsValue={reviews}></Reviews>
                <Footer></Footer>
            </div>
        </main>
    );
}

export default page;