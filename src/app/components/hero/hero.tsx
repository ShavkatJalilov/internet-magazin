import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className='page-header '>
        <div className='container'>
          <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-1/3 lg:py-24'>
              <h1 className='text-4xl lg:text-6xl font-bold mb-4'>Dua</h1>
              <p className='text-lg lg:text-xl leading-relaxed mb-4'>
                в Узбекистане Один из самых крупных заводов по производству Duʼ̓a
                Premium water
              </p>
              <div className='buttons'>
                <mark className='btn text-xl p-1  rounded-md text-red-600 mt-4'>
                  у нас есть бесплатная доставка
                </mark>
                <Link
                  target='_blank'
                  href='https://t.me/duawater_bot'
                  className='text-indigo-500 block  mt-3   font-bold'
                >
                  заказать сейчас
                </Link>
              </div>
            </div>
            <div className='lg:w-2/3 p-5 lg:ps-0'>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3'>
                <div className='col-span-1'>
                  <Image
                    className='w-full border-radius-lg shadow mt-0 lg:mt-7  rounded-3xl  transition duration-300 ease-in-out hover:scale-110'
                    width='530'
                    height='530'
                    src='/img/moshinKatasi.jpg'
                    alt=' foto-1'
                  />
                  <Image
                    className='w-full  rounded-3xl border-radius-lg shadow mt-0 lg:mt-7  transition duration-300 ease-in-out hover:scale-110'
                    width='530'
                    height='530'
                    src='/img/20litrlik.jpg'
                    alt='foto-1'
                  />
                </div>
                <div className='col-span-1 lg:col-span-2'>
                  <Image
                    width='530'
                    height='530'
                    className='w-full rounded-3xl border-radius-lg shadow   transition duration-300 ease-in-out hover:scale-110'
                    src='/img/qizilLogo.jpg'
                    alt='foto-2'
                    loading='lazy'
                    priority={false}
                  />
                  <Image
                    width='430'
                    height='430'
                    className='w-full  rounded-3xl border-radius-lg shadow mt-4  transition duration-300 ease-in-out hover:scale-110'
                    src='/img/labo.jpg'
                    alt=' foto-3'
                    loading='lazy'
                  />
                </div>
                {/* <div className='col-span-1 lg:col-span-2'></div> */}
                <div className='col-span-1'>
                  <Image
                    width='530'
                    height='530'
                    className='w-full border-radius-lg  rounded-3xl shadow mt-0 lg:mt-5  transition duration-300 ease-in-out hover:scale-110'
                    src='/img/miniS.jpg'
                    alt=' foto-4'
                    loading='lazy'
                  />
                  <Image
                    width='530'
                    height='530'
                    className='w-full border-radius-lg shadow mt-4   rounded-3xl  transition duration-300 ease-in-out hover:scale-110'
                    src='/img/20ozi.jpg'
                    alt=' foto-5'
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
