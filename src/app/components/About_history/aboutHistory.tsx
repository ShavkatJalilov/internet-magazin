import Image from "next/image";
import React from "react";

const AboutHistory = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='flex w-full mb-20 flex-wrap'>
            <h1 className='sm:text-3xl text-2xl  font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4'>
              наши продукты
            </h1>
            <p className='lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, a
              dicta fugit officia, debitis magni officiis inventore provident
              facilis repellat reprehenderit dolor neque necessitatibus fuga
              recusandae nostrum cum voluptatum vitae.
            </p>
          </div>
          <div className='flex justify-center flex-wrap md:-m-2 -m-1'>
            <div className='flex flex-wrap w-1/2'>
              <div className='md:p-2 p-1 w-1/2'>
                <Image
                  alt='gallery'
                  className='  object-cover object-center block rounded-3xl  transition duration-300 ease-in-out hover:scale-110'
                  src='/img/miniS.jpg'
                  width={500}
                  height={300}
                />
              </div>
              <div className='md:p-2 p-1 w-1/2 '>
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
                  className=' m-2 object-cover object-center block rounded-3xl  transition duration-300 ease-in-out hover:scale-110 '
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
              {/* <div className='md:p-2 p-1 w-1/2'>
                <Image
                  alt='gallery'
                  className=' object-cover object-center block'
                  src='/img/labo.jpg'
                  width={503}
                  height={303}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHistory;
