import Insurance_block from "@/components/Insurance_block";
import Image from "next/image";


import Doctor1 from '../img/Doctor1.png';
import Doctor2 from '../img/doctor2.png';
import Doctor3 from '../img/doctor3.png';
import Doctor4 from '../img/doctor4.png';
import Polis from "@/components/Polis";
import Carousel_of_countries from "@/components/Carousel_of_countries";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const options = [
  { value: 'Соединенные Штаты Америки' },
  { value: 'Канада' },
  { value: 'Великобритания' },
  { value: 'Германия' },
  { value: 'Франция' },
  { value: 'Италия' },
  { value: 'Испания' },
  { value: 'Португалия' },
  { value: 'Нидерланды' },
  { value: 'Бельгия' },
  { value: 'Швеция' },
  { value: 'Норвегия' },
  { value: 'Дания' },
  { value: 'Финляндия' },
  { value: 'Австралия' },
  { value: 'Новая Зеландия' },
  { value: 'Япония' },
  { value: 'Южная Корея' },
  { value: 'Китай' },
  { value: 'Индия' },
  { value: 'Бразилия' },
  { value: 'Мексика' },
  { value: 'Аргентина' },
  { value: 'Чили' },
  { value: 'Колумбия' },
  { value: 'Перу' },
  { value: 'Россия' },
  { value: 'Беларусь' },
  { value: 'Украина' },
  { value: 'Польша' },
  { value: 'Чехия' },
  { value: 'Венгрия' },
  { value: 'Австрия' },
  { value: 'Швейцария' },
  { value: 'Турция' },
  { value: 'Саудовская Аравия' },
  { value: 'Объединенные Арабские Эмираты' },
  { value: 'Южноафриканская Республика' },
  { value: 'Египет' },
  { value: 'Марокко' },
];

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


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-[url('../img/back.png')] bg-no-repeat bg-cover bg-fixed ">
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <Insurance_block h1_text="Страхование путешественников" option={options}></Insurance_block>
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-white text-black max-sm:p-2 ">
          <div className="flex flex-col w-4/6 px-14 max-lg:w-full max-lg:px-5">
            <div className="flex flex-row justify-between items-center gap-3 max-sm:flex-col">
              <div className="w-[605px] flex flex-col gap-5 max-sm:w-full">
                <h1 className="text-3xl font-semibold max-md:text-xl">Покрываем коронавирус</h1>
                <p className="text-base font-light max-md:text-sm">Все наши полисы покрывают лечение и диагностику в случае заражения COVID-19, ведь не все страны готовы лечить коронавирус за свой счет. Максимальное покрытие по медицинским расходам составит 100 000 USD/EUR. Также полисом предусмотрена компенсация по риску отмена поездки, если застрахованный заболеет COVID-19.</p>
              </div>
              <Image src={Doctor1} alt="Доктор" className="max-lg:w-[300px] max-lg:h-auto"/>
            </div>
            <div className="flex flex-row-reverse justify-between items-center gap-3 max-sm:flex-col">
              <div className="w-[605px] flex flex-col gap-5 max-sm:w-full">
                <h1 className="text-3xl font-semibold max-md:text-xl">Помощь при обострении хронических заболеваний</h1>
                <p className="text-base font-light max-md:text-sm">Сейчас даже у людей моложе 30 лет есть хронические заболевания, которые время от времени дают о себе знать. Не говоря уже о пожилых людях - для них помощь при обострении хронических заболеваний особенно важна. Поэтому мы предлагаем одно из самых больших покрытий на рынке по купированию обострений хронических заболеваний – до 3 000 $.</p>
              </div>
              <Image src={Doctor2} alt="Доктор" className="max-lg:w-[300px] max-lg:h-auto"></Image>
            </div>
            <div className="flex flex-row justify-between items-center gap-3 max-sm:flex-col">
              <div className="w-[605px] flex flex-col gap-5 max-md:min-w-[300px]  max-sm:min-w-full max-sm:w-full">
                <h1 className="text-3xl font-semibold max-md:text-xl">Доктор онлайн 24/7</h1>
                <p className="text-base font-light max-md:text-sm">Чтобы не тратить время на дорогу до клиники и ожидание врача, наши клиенты могут бесплатно получить онлайн-консультацию терапевта или педиатра в приложении на смартфоне. Эта опция включена во все страховки независимо от тарифа. Врач отвечает сразу же 24/7 в видео- или онлайн-чате. Нужно лишь установить наше приложение.</p>
              </div>
              <Image src={Doctor3} alt="Доктор" className="max-lg:w-[300px] max-lg:h-auto  max-xl:w-[70%]"></Image>
            </div>
            <div className="flex flex-row-reverse justify-between items-center gap-3 max-sm:flex-col">
              <div className="w-[605px] flex flex-col gap-5 max-sm:w-full">
                <h1 className="text-3xl font-semibold max-md:text-xl">Только проверенные клиники</h1>
                <p className="text-base font-light">Мы контролируем качество работы медицинских учреждений с помощью Ваших рейтингов и отзывов на нашем сайте. Если мы получаем более 2-х негативных отзывов по клинике, то просто перестаем с ней работать. Таким образом, наших клиентов направляют только в проверенные клиники, где быстро оказывают квалифицированную медицинскую помощь.</p>
              </div>
              <Image src={Doctor4} alt="Доктор" className="max-lg:w-[300px] max-lg:h-auto"></Image>
            </div>
          </div>
          <Polis></Polis>
          <Carousel_of_countries option={options}></Carousel_of_countries>
          <Reviews reviewsValue={reviews}></Reviews>
          <Footer></Footer> 
        </div>
    </main>
  );
}
