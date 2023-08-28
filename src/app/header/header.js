import "./header.css";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className='header'>
        <Link className='header__logo' href='/'>
          <Image
            src='/img/Group 1.svg'
            alt='logo svg'
            width={203}
            height={76}
          />
        </Link>
        <form className='header__form' autoCapitalize='off'>
          <input className='header__search' type='text' placeholder='Поиск ' />
          <button className='header__searchButton'>Найти</button>
        </form>
        <ul className='header__list'>
          <li className='haeder__items'>
            <select className='haeder__itemsHref'>
              <option>Ru</option>
              <option>Uz</option>
            </select>
          </li>
          <li className='haeder__items'>
            <Link className='haeder__itemsHref' href='header__like'>
              Избранные
            </Link>
          </li>
          <li className='haeder__items'>
            <Link className='haeder__itemsHref' href='header__karzinka'>
              Корзина
            </Link>
          </li>
          <li className='haeder__items'>
            <Link className='haeder__itemsHref' href='/'>
              Войти
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
