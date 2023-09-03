const Labaratory = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container  mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h2 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
              Производство
            </h2>
          </div>
          <div className='flex flex-wrap  pr-2'>
            <div className=' p-2  md:w-1/3'>
              <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg title-font font-medium'>
                    Лаборатория
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                    После водоподготовительного процесса образец воды берут на
                    анализ в лабораторию, где выявляется соотношение полезных
                    минералов и других компонентов содержащихся в составе воды.
                    После результата тестирования и подтверждения соответствия
                    качества воды мировым стандартам начинается процесс
                    смешивания пищевых концентратов для напитка согласно
                    рецепту.
                  </p>
                </div>
              </div>
            </div>
            <div className='p-2  md:w-1/3'>
              <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg title-font font-medium'>
                    Водоподготовка
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                    Все начинается с многоэтапного процесса фильтрации воды.
                    Система фильтрации оборудования европейского производителя
                    «Chriwa Wasseraufbereitungstechnik GmbH», Германия, который
                    сегодня является лидером в сфере промышленного производства
                    оборудования водоподготовки на мировом рынке. Весь процесс
                    автоматизирован, а уровень качества и гигиенического
                    исполнения отвечают международным стандартам и нормам
                    безопасности.
                  </p>
                </div>
              </div>
            </div>
            <div className='p-2 pr-0 md:w-1/3'>
              <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <circle cx='6' cy='6' r='3'></circle>
                      <circle cx='6' cy='18' r='3'></circle>
                      <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg title-font font-medium'>
                    Рецепт
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                    Процесс смешивания автоматизирован и контролируется
                    компьютером, что гарантирует высокую точность дозировки и
                    соответствия рецепту. Концентраты для безалкогольных
                    напитков компании «Du`a» производятся в Германии, одним из
                    передовых производителей специальных добавок для пищевой
                    промышленности и производства напитков, компанией «WILD».
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap   justify-center  mt-10'>
            <img
              className='lg:mr-5'
              src='/img/setiS.png'
              alt=''
              width={450}
              height={350}
            />
            <img
              className=' mt-5 lg:mt-0'
              src='/img/sertif.jpg'
              alt=''
              width={450}
              height={350}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Labaratory;
