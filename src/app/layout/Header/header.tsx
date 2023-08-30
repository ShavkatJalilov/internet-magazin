import { Stick } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* <header
        style={{ backgroundColor: " #79C3E9" }}
        className='navbar pt-5 pb-5  '
      >
        <div className='container'>
          <div className=' flex justify-between'>
            <div className='flex justify-between'>
              <span className='tashkentBefor'>
                <Link className='' href='/'>
                  logo
                </Link>
              </span>
            </div>
            <nav className='navbar text-white'>
              <ul className='list-none flex justify-center align-top'>
                <li className=' mr-5'>
                  <Link className='navbar__href  hover:text-sky-700' href='/'>
                    About
                  </Link>
                </li>
                <li className='mr-5'>
                  <Link className='navbar__href  hover:text-sky-700' href='/'>
                    product
                  </Link>
                </li>
                <li className=''>
                  <Link
                    className='navbar__href  hover:text-sky-700 transition-opacity  '
                    href='/'
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}
      <header className='text-gray-600 body-font bg-blue-400 sticky top-0   w-full z-50 bg-opacity-90 shadow-md'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
            href='/'
          >
            <Image
              className='rounded-full'
              src='/img/logo.jpg'
              alt='Foto logo'
              width={55}
              height={55}
            />
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center text-white'>
            <Link className='mr-5 hover:text-blue-700' href='/'>
              О Компании
            </Link>
            <Link className='mr-5 hover:text-blue-700' href='/'>
              Продукция
            </Link>
            <Link className='mr-5 hover:text-blue-700' href='/'>
              Рекламные материалы
            </Link>
          </nav>
          <div>
            <button className="inline-flex items-center border-0 focus:outline-none rounded text-base mt-4 md:mt-0 w-5 h-5 bg-[url('/img/uzb.svg')] bg-center bg-no-repeat mr-1"></button>
            <button className="inline-flex items-center border-0 focus:outline-none rounded text-base mt-4 md:mt-0 w-5 h-5 bg-[url('/img/rusIcon.png')] bg-center bg-no-repeat"></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
