import React from 'react';
import joinImg from "../../assets/join-img.png";

const JoinCommunity = () => {
  return (
    <section className='py-12 px-4'>
      <div className='container flex flex-col md:flex-row gap-6 text-center md:text-start items-center text-white bg-linear-to-tr from-[#0F1BFF] 5%, via-[#000000]  to-[#000000] rounded-3xl p-8 md:p-12'>
        <div className='space-y-2'>
          <h2 className='section-title'> Join a vibrant community moving forward together. </h2>
          <p> A community built for everyone, hire, work, sell, and grow in one place. </p>
          <button className='btn btn-secondary'> Join Community </button>
        </div>
        <img src={joinImg} alt='' className='h-80 w-fit object-cover' />
      </div>
    </section>
  )
}

export default JoinCommunity;