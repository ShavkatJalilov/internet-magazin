import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./pompa.css";
const page = () => {
  return (
    <div className='container'>
      <div className='md:flex justify-center block'>
        <div className=' cards__imgs max-w-sm mt-5 md:mr-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <Link href='https://t.me/duawater_bot'>
            <Image
              className='rounded-t-lg imgs__popmp '
              src='/img/pompa1.jpg'
              width={390}
              height={250}
              alt='foto'
            />
          </Link>
          <div className='p-5 pompa__box'>
            <Link href='https://t.me/duawater_bot'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                автоматический помпа
              </h5>
            </Link>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Материал: пластик, пищевой силикон, нержавеющая сталь. Встроенный
              аккумулятор: 1200 mAh. Время полного заряда: 3 ч. C одним полном
              зарядом работает от 4 до 6 капсул (20 литровый капсула) Скорость
              откачки воды: 2.5 л./мин. Питание: Кабель micro-USB. Напряжение: 5
              Вт. Мощность 4 Вт. Производитель: Китай.
            </p>
            <Link
              href='https://t.me/duawater_bot'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              заказать
              <svg
                className='w-3.5 h-3.5 ml-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className=' cards__imgs max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <Link href='https://t.me/duawater_bot'>
            <Image
              className='rounded-t-lg  imgs__popmp '
              src='/img/pompa2.jpg'
              width={250}
              height={250}
              alt='foto'
            />
          </Link>
          <div className='p-5 pompa__box '>
            <Link href='https://t.me/duawater_bot'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                механический помпа
              </h5>
            </Link>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Независимость от электропитания. Простота в эксплуатации и уходе.
              Система прямой подачи в помпе не позволяет воде застаиваться. В
              комплект входят: 1 насос, 3 водопроводные трубы, 1 выпускная труба
              с заглушкой. Изготовлена из прочного пищевого пластика. Тип помпы:
              механический. Тип установки: на бутыль (бутыль в комплект не
              входит). Надёжное крепление От 5л до 19 л
            </p>
            <Link
              href='https://t.me/duawater_bot'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              заказать
              <svg
                className='w-3.5 h-3.5 ml-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
