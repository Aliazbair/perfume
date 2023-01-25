import React from 'react';

export default function Navbar() {
  return (
    <div className=' flex items-center justify-between p-4 z-[100] shadow-sm shadow-red-400 absolute w-full '>
      <h1 className='text-4xl text-red-600 cursor-pointer'>
        NETFLIX
      </h1>
      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sing Up</button>
      </div>
    </div>
  );
}
