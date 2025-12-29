import React from 'react';
import why01 from "../../assets/why-01.svg";
import why02 from "../../assets/why-02.svg";
import why03 from "../../assets/why-03.svg";
import why04 from "../../assets/why-04.svg";

const Why = () => {
  return (
    <section className='py-12'>
      <div className='container flex flex-col lg:flex-row items-start lg:items-center gap-4 bg-primary/10 p-4 md:p-8 py-10 md:py-16 md:rounded-2xl'>
        <div className='max-w-130 flex flex-col items-start'>
          <h2 className='section-title'> Why Mosalak </h2>   
          <p className='text-xl lg:text-[40px] font-semibold leading-tight mb-4'>
            We are known for high quality work and money back guarantee
          </p>   
          <small className='text-sm mb-4'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis aliquet ante. Phasellus vel sodales tortor, id consequat risus
          </small>
          <button className='btn'>
            Join now
          </button>
        </div>

        <div className='w-full h-full grid grid-cols-2 gap-4'>
          <div className='text-white text-center p-4 rounded-md bg-primary space-y-2'>
            <img src={why01} alt='' className='w-fit mb-2 mx-auto h-12' />
            <h4 className='text-lg font-bold mb-0.5'> Escrow Protection </h4>
            <p> Your money is safe until delivery </p>
          </div>
          <div className='text-primary text-center p-4 rounded-md bg-primary/30 space-y-2'>
            <img src={why02} alt='' className='w-fit mb-2 mx-auto h-12' />
            <h4 className='text-lg font-bold mb-0.5'> Verified Sellers </h4>
            <p> Only trusted merchants allowed </p>
          </div>
          <div className='text-primary text-center p-4 rounded-md bg-primary/30 space-y-2'>
            <img src={why03} alt='' className='w-fit mb-2 mx-auto h-12' />
            <h4 className='text-lg font-bold mb-0.5'> Dispute Resolution </h4>
            <p> Fair conflict management </p>
          </div>
          <div className='text-white text-center p-4 rounded-md bg-primary space-y-2'>
            <img src={why04} alt='' className='w-fit mb-2 mx-auto h-12' />
            <h4 className='text-lg font-bold mb-0.5'> Secure Wallet </h4>
            <p> Fast and protected payments </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why;