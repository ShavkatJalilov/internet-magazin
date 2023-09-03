import Image from "next/image";
import React from "react";

const AboutHistory = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='flex w-full mb-20 flex-wrap'>
            <h1 className='sm:text-3xl text-2xl  font-medium title-font   lg:w-1/3 lg:mb-0 mb-4  text-blue-900'>
              наши продукты
            </h1>
            <p className='lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base  text-blue-900'>
              Столовая, питьевая вода, высокой степени очистки. Не имеет
              постороннего запаха, имеет мягкий, натуральный вкус. Легко утоляет
              жажду и освежает. Duʼ̓a premium water — вода на каждый день.
            </p>
          </div>
          <div className='flex justify-center flex-wrap md:-m-2 -m-1'>
            <div className='flex flex-wrap w-1/2 '>
              <div className='md:p-2 p-1 w-1/2 hidden md:block'>
                <Image
                  alt='gallery'
                  className='  object-cover object-center block rounded-3xl  transition duration-300 ease-in-out hover:scale-110'
                  src='/img/miniS.jpg'
                  width={500}
                  height={300}
                />
              </div>
              <div className='md:p-2 p-1 w-1/2  hidden md:block'>
                <Image
                  alt='gallery'
                  className=' h-80 object-cover object-center block rounded-3xl  transition duration-300 ease-in-out hover:scale-110'
                  src='/img/sumka.jpg'
                  width={501}
                  height={301}
                />
              </div>
              <div className='md:p-2 p-1 mr-auto ml-auto flex'>
                <Image
                  alt='gallery'
                  className=' hidden lg:block m-2 object-cover object-center   rounded-3xl  transition duration-300 ease-in-out hover:scale-110 '
                  src='/img/termz.jpg'
                  width={241}
                  height={301}
                />
                <Image
                  alt='gallery'
                  className=' m-2 w-96  h-80   object-center block  rounded-3xl  transition duration-300 ease-in-out hover:scale-110'
                  src='/img/20litrlik.jpg'
                  width={650}
                  height={500}
                />
              </div>
            </div>
            <div className='flex flex-wrap w-80  h-80'>
              <div className='md:p-2 p-1  '>
                <Image
                  alt='gallery'
                  className='    object-center block rounded-3xl  transition duration-300 ease-in-out hover:scale-110'
                  src='/img/vizitka.jpg'
                  width={601}
                  height={361}
                />
              </div>
              <div className='md:p-2 p-1 '>
                <Image
                  alt='gallery'
                  className='  object-cover object-center block rounded-3xl  transition duration-300 ease-in-out hover:scale-110'
                  src='/img/soat.jpg'
                  width={302}
                  height={202}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=' p-10 '>
        <h2 className='text-3xl font-medium title-font text-blue-900 mb-12 text-center'>
          видео Факты
        </h2>
        <video
          className='mr-auto ml-auto rounded-lg   w-1/2 '
          width='750'
          height='500'
          controls
        >
          <source src='/' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default AboutHistory;
