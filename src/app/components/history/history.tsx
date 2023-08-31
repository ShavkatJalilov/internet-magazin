import Image from "next/image";

const History = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <h2 className='text-3xl font-medium title-font text-blue-900 mb-12 text-center'>
            История становления.{" "}
          </h2>
          <div className='flex flex-wrap '>
            <div className='pr-1 md:w-1/2 w-full'>
              <div
                className='h-full  p-5 rounded'
                style={{ backgroundImage: "url('/img/bg-daryo.png')" }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='block w-5 h-5 text-gray-400 mb-4'
                  viewBox='0 0 975.036 975.036'
                >
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                <p className='leading-relaxed '>
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <div className='items-center'>
                  <Image
                    className='img-fluid pt-16 mr-auto ml-auto border-radius-lg max-w-xs transition duration-300 ease-in-out hover:scale-110'
                    alt='img'
                    src='/img/duasvg.svg'
                    width={400}
                    height={400}
                  />
                  {/* <span className='flex-grow flex flex-col pl-4'>
                    <span className='title-font font-medium text-gray-900'>
                      Holden Caulfield
                    </span>
                    <span className='text-gray-500 text-sm'>UI DEVELOPER</span>
                  </span> */}
                </div>
              </div>
            </div>
            <div className='pr-1 md:w-1/2 w-full'>
              <div
                className='h-full  p-5 rounded'
                style={{ backgroundImage: "url('/img/bg-daryo.png')" }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='block w-5 h-5 text-gray-400 mb-4'
                  viewBox='0 0 975.036 975.036'
                >
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                <p className='leading-relaxed '>
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <div className='items-center'>
                  <Image
                    className='img-fluid pt-16 mr-auto ml-auto border-radius-lg max-w-xs transition duration-300 ease-in-out hover:scale-110'
                    alt='img'
                    src='/img/duasvg.svg'
                    width={400}
                    height={400}
                  />
                  {/* <span className='flex-grow flex flex-col pl-4'>
                    <span className='title-font font-medium text-gray-900'>
                      Holden Caulfield
                    </span>
                    <span className='text-gray-500 text-sm'>UI DEVELOPER</span>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
