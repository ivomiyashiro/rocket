import { Dispatch, SetStateAction } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'components/icons';

interface Props {
  currentPage: number;
  totalPages: number;
  handlePage: Dispatch<SetStateAction<number>>
}

export const Pagination = ({ currentPage, totalPages, handlePage }: Props) => {
  return (
    <div className='flex items-center justify-between px-4 py-3'>
      <span className='text-xs text-gray-500'> Page { currentPage } of { totalPages }</span>
      <div className='flex'>
        {
          currentPage !== 1
          &&
          <button className='w-[36px] h-[36px] flex justify-center items-center rounded-l-md border text-gray-700 outline-none'
            onClick={ () => handlePage(prev => prev - 1) }
          >
            <ChevronLeftIcon size='20px' />
          </button>
        }
        <button className='w-[36px] h-[36px] flex justify-center items-center rounded-r-md border text-gray-700 outline-none'
          onClick={ () => handlePage(prev => prev + 1) }
        >
          <ChevronRightIcon size='20px' />
        </button>
      </div>
    </div>
  );
};
