import "./headerOne.css";
const headerOne = () => {
  return (
    <>
      <header className='headerOne'>
        <div className='headerOne__wrapper'>
          <span className='headerOne__adres'>Ташкент</span>

          <span className='headerOne__forAfter'>
            <select className='headerOne__language' name='select'>
              <option defaultValue='UZB'>UZB</option>
              <option defaultValue='RUS'>RUS</option>
            </select>
          </span>
        </div>
        <navbar className='headerOne__wrapper-nav'>
          <ul className='headerOne__list'>
            <li className='headerOne__item'>поддержка</li>
            <li className='headerOne__item'>доставка </li>
            <li className='headerOne__item'>гарантия</li>
          </ul>
        </navbar>
      </header>
    </>
  );
};

export default headerOne;
