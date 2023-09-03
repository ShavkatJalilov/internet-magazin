import Image from "next/image";
import React from "react";

const ContactGrid = () => {
  return (
    <>
      <div className='container   p-5  '>
        <h2 className='text-3xl mb-7 mt-5 text-center text-cyan-600 '>
          наши продукты
        </h2>
        <p className='text-center text-cyan-600 max-w-lg mx-auto mb-5'>
          Столовая, питьевая вода, высокой степени очистки. Не имеет
          постороннего запаха, имеет мягкий, натуральный вкус. Легко утоляет
          жажду и освежает. Duʼ̓a premium water — вода на каждый день.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='grid gap-2 '>
            <div>
              <Image
                width={400}
                height={350}
                className='h-full max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/20litrlik.jpg'
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
                className='h-full max-w-full rounded-xl  drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
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
              {/* <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/logo3.jpg'
                alt=''
              /> */}
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/sumkaca1.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-2 pt-7'>
            <div>
              <Image
                width={400}
                height={350}
                className='h-auto  max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/soat.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-full max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/chashka.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                width={400}
                height={350}
                className='h-full max-w-full rounded-xl drop-shadow-xl transition duration-300 ease-in-out hover:scale-90'
                src='/img/sumka.jpg '
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactGrid;
