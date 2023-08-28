"use client";
import "./navbar.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <navbar className='navbar'>
        <div className='container'>
          <ul className='navbar__list'>
            <li className='navbar__item  activelist'>
              <Link className='navbar__link activeNavbar' href='/'>
                Все категории
              </Link>
            </li>
            <li className=' navbar__item'>
              <Link className='navbar__link' href='../about'>
                Скидки
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Электроника
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Бытовая техника
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Детям
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Ремонт
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Дом
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Продукты
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Для геймеров
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Книги
              </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' href='../about'>
                Продавай на Vodiy
              </Link>
            </li>
          </ul>
        </div>
      </navbar>
    </>
  );
};
export default Navbar;
