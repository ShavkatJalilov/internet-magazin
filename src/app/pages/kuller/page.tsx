import Image from "next/image";
import "./kuller.css";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className='container'>
        <h2 className='text-center text-4xl font-medium title-font text-blue-900  pb-4 mt-5'>
          Куллер
        </h2>

        <div className='kuller_img flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mt-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4'>
          <Image
            className='img object-cover rounded md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src='/img/kullerBir.jpg'
            alt='foto logo'
            width={310}
            height={410}
          />

          <div className='box_img flex ml-4 flex-col justify-between leading-normal'>
            <span className='lg:flex'>
              <span className='box__kuller'>
                <h5 className='mb-1 text-xl font-bold text-gray-900 dark:text-white'>
                  ZIFFLER WD-1188DG
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Тип загрузки - верхняя 2 режима подачи воды (горячая и
                  холодная). Температура нагревания - 90С 5л/ч. Температура
                  охлаждения- 10С 2л/ч. Гарантия 1 года <br />
                </p>
                <mark className='btn text-xl p-1 rounded-md text-red-600 mt-1'>
                  Подарок 5 капсул воды
                </mark>
                <span className='text-2xl block mt-2'>1 200 000 сум</span>
              </span>

              <span className='box__kuller ml-2 '>
                <h5 className='mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Юридических лиц
                </h5>
                <p className=' mb-2 font-normal text-gray-700 dark:text-gray-400'>
                  Аренда только для юридических лиц. Каждое 3 месяца должно купить
                  120 капсул воды. Доставка по Ташкенту бесплатно.
                </p>
                <mark className=' text-xl p-1 rounded-md text-red-600  '>
                  Куллер бесплатно
                </mark>
                <span className='text-xl block mt-1 '>
                  1 800 000 на 3 месяца
                </span>
              </span>
            </span>
            <Link
              target='_blank'
              href='https://t.me/duawater_bot'
              className='button__kuller  mt-2   p-5 rounded-full bg-blue-400 text-white text-center text-lg'
            >
              заказать
            </Link>
          </div>
        </div>

        <div className='ml-auto  mr-16 kuller_img  flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row   mt-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4'>
          <Image
            className='img object-cover imgMobil   rounded  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src='/img/kuller3.jpg'
            alt='foto logo'
            // style={{ width: "auto", height: "auto" }}
            width={310}
            height={410}
          />
          <div className='box_img flex ml-4 flex-col justify-between  leading-normal'>
            <span className='lg:flex'>
              <span className='box__kuller '>
                {" "}
                <h5 className='mb-1 text-xl font-bold   text-gray-900 dark:text-white'>
                  Куллер чай от ZIFFLER
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Чай bar. Электроник холодилник. Сенсорний управление, 2 типа{" "}
                  чайника. <br /> Удобно наливать воду из нижней части.
                  Температура нагревания 40 С до100 C. Температура охлаждения 6 С
                  до10 C. Доставка по Ташкенту бесплатно.
                </p>
                <mark className='btn text-xl p-1  rounded-md text-red-600 mt-1'>
                  Подарок 5 капсул воды
                </mark>
                <span className='text-2xl block mt-2'>2 250 000 сум</span>
              </span>

              <span className='box__kuller   ml-2  '>
                {" "}
                <h5 className='mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Юридических лиц
                </h5>
                <p className=' mb-2 font-normal text-gray-700 dark:text-gray-400'>
                  Аренда только для юридических лиц. Каждое 3 месяца должно купить
                  200 капсул воды. Доставка по Ташкенту бесплатно.
                </p>
                <mark className=' text-xl p-1  rounded-md text-red-600  '>
                  Куллер бесплатно.
                </mark>
                <span className='text-xl block mt-1 '>
                  3 000 000 на 3 месяца
                </span>
              </span>
            </span>
            <Link
              target='_blank'
              href='https://t.me/duawater_bot'
              className='button__kuller text-indigo-500 mt-2 text-lg  md-w-1/2  '
            >
              <h2 className='   p-5 rounded-full  bg-blue-400 text-white  text-center text-lg'>
                заказать
              </h2>
            </Link>
          </div>

          <Image
            className='img object-cover imgDesktop   rounded  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src='/img/kuller3.jpg'
            alt='foto logo'
            // style={{ width: "auto", height: "auto" }}
            width={310}
            height={410}
          />
        </div>

        <div className=' ml-16 kuller_img  flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row   mt-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4'>
          <Image
            className='img object-cover    rounded  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src='/img/kuller2.jpg'
            alt='foto logo'
            // style={{ width: "auto", height: "auto" }}
            width={310}
            height={410}
          />

          <div className='box_img flex ml-4 flex-col justify-between  leading-normal'>
            <span className='lg:flex'>
              <span className=' box__kuller  '>
                {" "}
                <h5 className='mb-1 text-xl font-bold   text-gray-900 dark:text-white'>
                  IWD-1134B
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Куллер от ZIFFLER. Цвет корпуса - чёрный. Материал - Металл,
                  пластик. Количество кранов для подачи воды - 3 шт. Охлаждение -
                  компрессорное. Температура нагревания 40 С до 90 C. Температура
                  охлаждения 6 С до10 C. Доставка по Ташкенту бесплатно.
                </p>
                <mark className='btn text-xl p-1  rounded-md text-red-600 mt-1'>
                  Подарок 5 капсул воды
                </mark>
                <span className='text-2xl block mt-2'>1 500 000 сум</span>
              </span>

              <span className='box__kuller  ml-2  '>
                {" "}
                <h5 className='mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Юридических лиц
                </h5>
                <p className=' mb-2 font-normal text-gray-700 dark:text-gray-400'>
                  Аренда только для юридических лиц. Каждое 3 месяца должно купить
                  150 капсул воды. Доставка по Ташкенту бесплатно.
                </p>
                <mark className=' text-xl p-1  rounded-md text-red-600  '>
                  Куллер бесплатно.
                </mark>
                <span className='text-xl block mt-1 '>
                  2 250 000 на 3 месяца
                </span>
              </span>
            </span>
            <Link
              target='_blank'
              href='https://t.me/duawater_bot'
              className='button__kuller text-indigo-500 mt-2 text-lg  md-w-1/2  '
            >
              <h2 className='   p-5 rounded-full  bg-blue-400 text-white  text-center text-lg'>
                заказать
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
