import Image from "next/image";
import React from "react";

const Reklama = () => {
  return (
    <>
      <div className='container   p-5  '>
        <h2 className='text-3xl mb-7 mt-5 text-center text-cyan-600 '>
          наши продукты
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='grid gap-2 '>
            <div>
              <Image
                width={400}
                height={350}
                className='h-full max-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/miniS.jpg'
                alt=''
              />
            </div>
            <div className=''>
              <Image
                width={400}
                height={350}
                className='h-full w-full max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90  '
                src='/img/ofisDua.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl  drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/duad.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-2'>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/kuller.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/suvIcayabdiQiz.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/bg-daryo.png'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-2'>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/soat.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/vizitka.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-full max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/labo.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reklama;
