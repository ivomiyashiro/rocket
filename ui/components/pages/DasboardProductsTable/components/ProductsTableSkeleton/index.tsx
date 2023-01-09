import React from 'react';

export const ProductsTableSkeleton = () => {
  return (
    <div>
      <div className='h-[53px] px-[1rem] flex items-center border-b'>
        <ul className='flex items-center gap-4'>
          <li className='w-[100px] h-2 bg-gray-200 rounded-lg'></li>
          <li className='w-[100px] h-2 bg-gray-200 rounded-lg'></li>
        </ul>
      </div>
      <div className='flex gap-4 p-[1rem]'>
        <div className='h-[38px] border border-gray-200 bg-gray-50 w-full rounded-md'></div>
        <div className='h-[38px] border border-gray-200 bg-gray-50 w-full rounded-md max-w-[125px]'></div>
        <div className='h-[38px] border border-gray-200 bg-gray-50 w-full rounded-md max-w-[125px]'></div>
      </div>
      <div className='w-full px-[1rem] gap-6'>
        <div className='flex items-center border-t w-full gap-6 h-12'>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>

        </div>
        <div className='flex items-center border-t w-full gap-6 h-12'>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
        </div>
        <div className='flex items-center border-t w-full gap-6 h-12'>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
        </div>
        <div className='flex items-center border-t w-full gap-6 h-12'>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
        </div>
        <div className='flex items-center border-t w-full gap-6 h-12'>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
        </div>
        <div className='flex items-center border-t w-full gap-6 h-12'>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
          <div className='w-full h-2 bg-gray-200 rounded-lg'></div>
        </div>
      </div>
    </div>
  );
};
