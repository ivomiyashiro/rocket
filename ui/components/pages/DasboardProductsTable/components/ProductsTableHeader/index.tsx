import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { TSort } from 'interfaces';
import { SortIcon, EyeIcon } from 'components/icons';
import { Select } from 'components/ui';
import { Searchbar } from '../';

interface Props {
  searchValue: string;
  limit: number;
  sort: string;
  handleSearch: Dispatch<SetStateAction<string>>;
  handleLimit: Dispatch<SetStateAction<number>>;
  handleSort: Dispatch<SetStateAction<TSort>>;
}

export const ProductsTableHeader = ({ searchValue, limit, sort, handleSearch, handleLimit, handleSort }: Props) => {
  return (
    <div className='px-4 py-3 flex gap-4 justify-between items-center'>
      <Searchbar searchValue={ searchValue } handleFilters={ handleSearch } />
      <div className='flex gap-4 items-center h-[38px]'>
        <Select 
          id='select-limit'
          options={ ['10', '15', '20'] }
          value={ limit }
          icon={ <EyeIcon size='20px' /> }
          onChange={ (e: ChangeEvent<HTMLSelectElement>) => handleLimit(+e.target.value) }
        />
        <Select 
          id='select-orderBy'
          value={ sort }
          options={ ['A - Z', 'Z - A', 'Low inventory', 'High inventory', 'Lowest Price', 'Highest Price'] }
          icon={ <SortIcon size='20px' /> }
          onChange={ (e: ChangeEvent<HTMLSelectElement>) => handleSort(e.target.value as TSort) }
        />
      </div>
    </div>
  );
};
