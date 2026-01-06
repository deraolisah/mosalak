import React from 'react';
import joinBg from "../../assets/join-bg.png";

const TopNav = () => {
  return (
    <div className='w-full bg-primary text-white flex flex-col items-center'>
      <div className='w-full bg-[#000F66] text-white text-xs font-normal hidden md:flex items-center justify-center gap-4 h-10'>
        <span> Escrow-Protected Marketplace </span>
        <span> Verified Sellers </span>
        <span> Safe Delivery </span>
        <span> Money-Back Guarantee </span>
      </div>

      <div className='w-full hidden md:flex items-center justify-center gap-4 py-3 relative'>
        <p className='text-sm'> Buy. Sell. Hire. Earn. All in one platform. </p>
        <button className='btn btn-secondary'> Hire Freelancer </button>

        <div className='absolute z-0 inset-0 bg-cover bg-center opacity-15'
          style={{
            background: `url(${joinBg})`,
            backgroundBlendMode: 'overlay',
          }}></div>
      </div>
    </div>
  )
}

export default TopNav;