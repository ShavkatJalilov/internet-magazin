const Fakts = () => {
  return (
    <>
      <section className='pt-8 pb-8'>
        <div className='container'>
          <h2 className='text-3xl font-medium title-font text-blue-900 mb-12 text-center'>
            видео Факты
          </h2>
          {/* <ul className='list-none flex justify-center    '>
            <li className='flex justify-center  align-middle mr-6 p-2 drop-shadow-xl '>
              <div className=' text-center bg-blue-300 	w-40 h-40 rounded-full transition duration-300 ease-in-out hover:scale-110 hover:bg-cyan-500'>
                <p className='   text-white    '> Button B</p>
              </div>
            </li>
            <li className='flex justify-center  align-middle mr-6 drop-shadow-xl'>
              <div className=' text-center bg-blue-300 	w-40 h-40 rounded-full transition duration-300 ease-in-out hover:scale-110 hover:bg-cyan-500'>
                <p className='   text-white    '> Button B</p>
              </div>
            </li>
            <li className='flex justify-center  align-middle mr-6'>
              <div className=' text-center bg-blue-300 	w-40 h-40 rounded-full transition duration-300 ease-in-out hover:scale-110 hover:bg-cyan-500'>
                <p className='   text-white    '> Button B</p>
              </div>
            </li>
            <li className='flex justify-center  align-middle drop-shadow-xl'>
              <div className=' text-center bg-blue-300 	w-40 h-40 rounded-full transition duration-300 ease-in-out hover:scale-110 hover:bg-cyan-500'>
                <p className='   text-white    '> Button B</p>
              </div>
            </li>
          </ul> */}

          <video
            className='mr-auto ml-auto rounded-lg '
            width='750'
            height='500'
            controls
          >
            <source src='/' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default Fakts;
