import Link from "next/link";
import React from "react";

const ContactMap = () => {
  return (
    <>
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d95881.12544618716!2d69.2295773490239!3d41.324411937910526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KLQsNGI0LrQtdC90YIg0YguINCc0LjRgNC30L4g0KPQu9GD0LPQsdC10LrRgdC60LjQuSDRgNCw0LnQvtC9IA!5e0!3m2!1sen!2s!4v1693566426824!5m2!1sen!2s'
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />

            <div className='bg-slate-50  relative flex flex-wrap py-6 rounded shadow-md'>
              <div className='lg:w-1/2 px-6'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  ADDRESS:
                </h2>
                <address>
                  Ташкент ш. Мирзо Улугбекский район, квартал Олмачи, улица
                  Тортарика, дом 3
                </address>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <Link
                  target='_blank'
                  href='https://t.me/duawater'
                  className='text-indigo-500 leading-relaxed'
                >
                  <h2 className='title-font font-semibold text-indigo-500  tracking-widest text-xs'>
                    телеграм-бот для заказа
                  </h2>
                </Link>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
                  PHONE
                </h2>
                <Link href='tel:+998906989999'>+99890 698 99 99</Link>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 md:w-1/2 bg-slate-50  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
              размещение заказа
            </h2>
            <p className='leading-relaxed mb-5 text-gray-600'>
              product haqida va narxi
            </p>
            <div className='relative mb-4'>
              <label htmlFor='name' className='leading-7 text-sm text-gray-600'>
                количество продукта
              </label>
              <input
                type='number'
                id='name'
                name='name'
                className='w-15 ml-10   bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='tel' className='leading-7 text-sm text-gray-600'>
                ваш номер телефона
              </label>
              <input
                type='number'
                id='tel'
                name='tel'
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='leading-7 text-sm text-gray-600'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                defaultValue={""}
              />
            </div>
            <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              отправлять
            </button>
            <p className='text-xs text-gray-500 mt-3'></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
