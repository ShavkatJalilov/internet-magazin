import Image from "next/image";

const Cards = () => {
  return (
    <>
      <div className='grid-cols-1 sm:grid md:grid-cols-3 '>
        <div className='mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0'>
          <div style={{ height: "308px" }}>
            <Image
              width={500}
              height={500}
              className='rounded-t-lg h-full'
              src='/img/card1.jpg'
              alt='Hollywood Sign on The Hill'
            />
          </div>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Концентраты
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Концентраты для безалкогольных напитков компании «Duʼ̓a»
              производятся в Германии, одним из передовых производителей
              специальных добавок для пищевой промышленности и производства
              напитков, компанией WILD Flavors. Более 85 лет компания WILD
              Flavors обеспечивает мировой рынок натуральными ингредиентами
              самого высокого качества.
            </p>
          </div>
        </div>
        <div className='mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0'>
          <div>
            <Image
              width={500}
              height={500}
              className='rounded-t-lg'
              src='/img/card2.jpg'
              alt='Palm Springs Road'
            />
          </div>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Оборудование
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Техническое оснащение компании «Duʼ̓a» сегодня включают в себя
              инжекционные машины «Husky» Канада, система водоподготовки
              «Chriwa» Германия, линии розлива «Krones» Германия, линии розлива
              «Comac» Италия, линии розлива «KHS» Германия и линии розлива
              «SIPA» Италия.
            </p>
          </div>
        </div>
        <div className='mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0'>
          <div>
            <Image
              width={500}
              height={500}
              className='rounded-t-lg'
              src='/img/card3.jpg'
              alt='Skyscrapers'
            />
          </div>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 mt-1'>
              ПЭТ - преформы.
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Успех использования ПЭТ преформ в качестве упаковки — прежде всего
              в ее экономичности, т.е. малом расходе материала, необходимого для
              упаковки товара. Рассматривая упаковочную отрасль в целом, можно
              отметить, что наиболее емкими являются сегменты гофрокартонной
              тары, упаковки из бумаги и картона, упаковки из полимерных пленок.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
