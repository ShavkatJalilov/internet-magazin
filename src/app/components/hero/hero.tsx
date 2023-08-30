import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className='page-header '>
        <div className='container'>
          <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-1/3 lg:py-24'>
              <h1 className='text-4xl lg:text-6xl font-bold mb-4'>
                Desired Experiences
              </h1>
              <p className='text-lg lg:text-xl leading-relaxed mb-4'>
                The time is now for it to be okay to be great. For being a
                bright color. For standing out.
              </p>
              <div className='buttons'>
                <button className='btn bg-gradient-warning mt-4'>
                  Discover
                </button>
                <button className='btn text-warning shadow-none mt-4'>
                  Read more
                </button>
              </div>
            </div>
            <div className='lg:w-2/3 p-5 lg:ps-0'>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3'>
                <div className='col-span-1'>
                  <Image
                    className='w-full border-radius-lg shadow mt-0 lg:mt-7 max-w-xs transition duration-300 ease-in-out hover:scale-110'
                    width='530'
                    height='530'
                    src='/img/moshinKatasi.jpg'
                    alt='flower-1'
                  />
                  <Image
                    className='w-full border-radius-lg shadow mt-0 lg:mt-7 max-w-xs transition duration-300 ease-in-out hover:scale-110'
                    width='530'
                    height='530'
                    src='/img/20litrlik.jpg'
                    alt='flower-1'
                  />
                </div>
                <div className='col-span-1 lg:col-span-2'>
                  <Image
                    width='530'
                    height='530'
                    className='w-full border-radius-lg shadow max-w-xs transition duration-300 ease-in-out hover:scale-110'
                    src='/img/labo.jpg'
                    alt='flower-2'
                    loading='lazy'
                  />
                  <Image
                    width='530'
                    height='530'
                    className='w-full border-radius-lg shadow mt-4 max-w-xs transition duration-300 ease-in-out hover:scale-110'
                    src='/img/qizilLogo.jpg'
                    alt='flower-3'
                    loading='lazy'
                  />
                </div>
                <div className='col-span-1'>
                  <Image
                    width='530'
                    height='530'
                    className='w-full border-radius-lg shadow mt-0 lg:mt-5 max-w-xs transition duration-300 ease-in-out hover:scale-110'
                    src='/img/stakancada_suv.jpg'
                    alt='flower-4'
                    loading='lazy'
                  />
                  <Image
                    width='530'
                    height='530'
                    className='w-full border-radius-lg shadow mt-4  max-w-xs transition duration-300 ease-in-out hover:scale-110 '
                    src='/img/20ozi.jpg'
                    alt='flower-5'
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
