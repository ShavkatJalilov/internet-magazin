const AboutHero = () => {
  return (
    <>
      {" "}
      <section
        className=' pt-28 pb-64 shadow-2xl '
        style={{
          backgroundImage: "url('/img/duad.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        {/* <img src="/magazin/public/img/suvIcayabdiQiz.jpg" alt="" /> */}
        <h2 className='text-center text-4xl font-medium title-font text-blue-900  pb-4'>
          {" "}
          Настоящее время.
        </h2>
        <p className='text-center w-1/2 mr-auto  ml-auto text-xl '>
          Сегодня компания «Navruz» является одним из самых крупных
          производителей безалкогольных напитков в Узбекистане. Годами
          построенные отношения с партнерами, заслуженная репутация компании,
          налаженное производство, логистика и дистрибуция приносят обильные
          плоды.
        </p>
      </section>
    </>
  );
};

export default AboutHero;
