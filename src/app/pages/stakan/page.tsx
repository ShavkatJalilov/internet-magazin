import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className='container'>
      <div className='md:flex justify-center block'>
        <div className=' cards__imgs max-w-sm mt-5 md:mr-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <Link href='https://t.me/duawater_bot'>
            <Image
              className='rounded-t-lg imgs__popmp '
              src='/img/stakan2.jpg'
              width={390}
              height={250}
              alt='foto'
            />
          </Link>
          <div className='p-5 pompa__box'>
            <Link href='https://t.me/duawater_bot'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                однаразивый стаканы
              </h5>
            </Link>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Кратко о товаре: Тип: Одноразовые стаканчики Материал: Пластик и
              бумага Размеры: 300; 200 Предназначение: Идеально подходят для
              различных напитков, холодных или горячих, на мероприятиях,
              пикниках или в офисе Количество в упаковке: 25 шт
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
              src='/img/stakan1.jpg'
              width={250}
              height={250}
              alt='foto'
            />
          </Link>
          <div className='p-5 pompa__box '>
            <Link href='https://t.me/duawater_bot'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                однаразивый стаканы
              </h5>
            </Link>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Кратко о товаре: Тип: Одноразовые стаканчики Материал: Пластик и
              бумага Размеры: 300; 200 Предназначение: Идеально подходят для
              различных напитков, холодных или горячих, на мероприятиях,
              пикниках или в офисе Количество в упаковке: 25 шт
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
