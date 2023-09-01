"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  function handlSelect(e: string) {
    console.log(e);
    router.push(e);
  }

  return (
    <>
      <header className='text-gray-600 body-font  bg-gradient-to-r from-cyan-500 to-blue-500 sticky top-0   w-full z-50 bg-opacity-90 shadow-md'>
        <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
          <Link
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
            href='/'
          >
            <Image
              className='rounded-full'
              src='/img/logo.jpg'
              alt='foto logo'
              style={{ width: "auto", height: "auto" }}
              width={76}
              height={56}
            />
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center text-white'>
            <Link
              className={
                pathname == "/pages/About"
                  ? "active"
                  : "mr-5 hover:text-blue-700"
              }
              href='/pages/About'
            >
              О Компании
            </Link>
            <div className={pathname == "/pages/Contact" ? "" : "mr-5"}>
              <select
                onChange={(e) => handlSelect(e.target.value)}
                className={
                  pathname == "/pages/Contact"
                    ? "active"
                    : " hover:text-blue-700 'p-2 outline-0 rounded-lg bg-transparent text-white "
                }
              >
                <option className='bg-blue-500' value='/pages/Contact_water'>
                  Продукция
                </option>
                <option className='bg-blue-500' value='/pages/Contact_water'>
                  19.5л воды
                </option>
                <option className='bg-blue-500' value='/pages/Contacts'>
                  200мл воды
                </option>
              </select>
            </div>

            <Link
              className={
                pathname == "/pages/reklama"
                  ? "active"
                  : "mr-5 hover:text-blue-700"
              }
              href='/pages/reklama'
            >
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
