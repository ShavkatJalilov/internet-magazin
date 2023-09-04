import Link from "next/link";
import React from "react";

const FooterHead = () => {
  return (
    <>
      <section className='footHeader mt-10 p-5 bg-blue-600 text-white'>
        <div className='container'>
          <div className='flex justify-between    align-middle'>
            <div className='w-64'>
              <address>
                адрес: Ташкент ш. Мирзо Улугбекский район, квартал Олмачи, улица
                Тортарика, дом 3
              </address>
            </div>
            <div className='flex flex-col'>
              <Link href='tel:+998991940101'>+99899 194 01 01</Link>
              <span>производитeль: OOO MEGA KORP</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterHead;
