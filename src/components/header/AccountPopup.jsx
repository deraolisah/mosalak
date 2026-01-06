import React from 'react';
import { Handbag, Store, ShieldUser } from 'lucide-react';

const AccountPopup = ({ isAuthenticated }) => {
  return (
    <div className='absolute z-70 mt-4 border border-dark/10 top-full right-0 w-60 rounded-xl shadow-md bg-white p-6 text-sm text-dark'>
      {isAuthenticated ? (
        <div className='space-y-4'>
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
      ) : (
        <div className='flex flex-col gap-4 items-center'>
          <button className='btn w-full'> Sign In </button>
          <button className='btn btn-text'> Create Account </button>
        </div>
      )}
    </div>
  )
}

export default AccountPopup;