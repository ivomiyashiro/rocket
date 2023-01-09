import { SearchIcon } from 'components/icons';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  searchValue: string;
  handleFilters: Dispatch<SetStateAction<any>>;
}

export const Searchbar = ({ searchValue, handleFilters }: Props) => {
  return (
    <div className='flex items-center gap-2 border border-gray-300 py-2 px-2 rounded-md text-gray-500 w-full'>
      <SearchIcon size='20px' />
      <input 
        type="text" 
        placeholder='Filter products'
        value={ searchValue }
        onChange={ (e) => handleFilters(e.target.value) }
        className='text-sm w-full outline-none text-gray-600'
      />
    </div>
  );
};
