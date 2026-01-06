import React from 'react'

const TopNav = () => {
  return (
    <div className='w-full bg-primary text-white flex flex-col items-center'>
      <div className='w-full bg-[#000F66] text-white text-xs font-normal hidden md:flex items-center justify-center gap-4 h-12'>
        <span> Escrow-Protected Marketplace </span>
        <span> Verified Sellers </span>
        <span> Safe Delivery </span>
        <span> Money-Back Guarantee </span>
      </div>

      <div className='flex items-center gap-4 py-4'>
        <p className='text-sm'> Buy. Sell. Hire. Earn. All in one platform. </p>
        <button className='btn btn-secondary'> Hire Freelancer </button>
      </div>
    </div>
  )
}

export default TopNav;