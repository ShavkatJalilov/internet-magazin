import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className='text-white-100 bg-blue-600 body-font'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <Link
            className='flex title-font font-medium items-center text-white mb-4 md:mb-0'
            href='/'
            target='_blank'
          >
            <Image
              className='rounded-full'
              src='/img/logo.jpg'
              alt='Foto logo'
              width={55}
              height={55}
            />
          </Link>
          <p className='text-sm text-white  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
            dua 2023
            <span>Август</span>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0   justify-center align-top sm:justify-start  mt-7 '>
            <Link
              href='https://www.facebook.com/duawater.uz/'
              className='text-white-400'
            >
              <svg
                fill='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-6'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </Link>

            <Link
              target='_blank'
              href='https://www.instagram.com/duawater.uz/'
              className='ml-3 text-white '
            >
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-6 h-6'
                viewBox='0 0 24 24'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </Link>
            <Link
              target='_blank'
              href='https://t.me/duawater'
              className='ml-3 text-white-400'
            >
              <svg height='46' width='46' viewBox='1  1 358 500'>
                <defs>
                  <linearGradient
                    gradientUnits='userSpaceOnUse'
                    y2='51.9'
                    y1='11.536'
                    x2='28.836'
                    x1='46.136'
                    id='a'
                  >
                    <stop offset='0' stop-color='#37aee2' />
                    <stop offset='1' stop-color='#1e96c8' />
                  </linearGradient>
                </defs>
                <g transform='scale(3.4682)'>
                  <circle fill='#2563EB' r='34.6' cx='34.6' cy='34.6' />
                  <path
                    fill='#fff'
                    d='M14.4 34.3l23.3-9.6c2.3-1 10.1-4.2 10.1-4.2s3.6-1.4 3.3 2c-.1 1.4-.9 6.3-1.7 11.6l-2.5 15.7s-.2 2.3-1.9 2.7c-1.7.4-4.5-1.4-5-1.8-.4-.3-7.5-4.8-10.1-7-.7-.6-1.5-1.8.1-3.2 3.6-3.3 7.9-7.4 10.5-10 1.2-1.2 2.4-4-2.6-.6l-14.1 9.5s-1.6 1-4.6.1c-3-.9-6.5-2.1-6.5-2.1s-2.4-1.5 1.7-3.1z'
                  />
                </g>
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
