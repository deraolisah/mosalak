import React from 'react';
import { Handbag, Store, ShieldUser } from 'lucide-react';

const AccountPopup = () => {
  return (
    <div className='absolute z-70 mt-4 border border-dark/10 top-full right-0 w-60 rounded-xl shadow-md bg-white p-6 space-y-4 text-sm text-dark'>
      <span className='flex text-center gap-2'>
        <Handbag size={20} strokeWidth={1.5} />
        Buyer Profile
      </span>
      <span className='flex items-center gap-2'>
        <Store size={20} strokeWidth={1.5} />
        Seller Profile
      </span>
      <span className='flex items-center gap-2'> 
        <ShieldUser size={20} strokeWidth={1.5} />
        Freelancer Profile
      </span>

      <hr className='border-px border-dark/40'/>
      <span className='flex'> Account Setting </span>
      <span className='flex text-red-500'> Logout </span>      
    </div>
  )
}

export default AccountPopup;