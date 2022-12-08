import { Dispatch, SetStateAction } from 'react';
import { SortableElement } from 'react-sortable-hoc';

import { IOption } from 'interfaces';

import { useValuesInput } from './useValuesInput';

import { Input } from 'components/ui';
import { DeleteIcon, GridIcon } from 'components/icons';

interface Props {
  index: number;
  optValue: { id: number; value: string };
  optID: number;
  isLast: boolean;
  withDeleteBtn: boolean;
  error: boolean;
  handleErrors: Dispatch<SetStateAction<number[]>>;
  handleValue: Dispatch<SetStateAction<IOption[]>>
}

const OptionValuesInput = ({ index, optValue, optID, isLast, error, withDeleteBtn, handleValue, handleErrors }: Props) => {

  const {
    handleInputValue,
    handleAddNewOptionValue,
    handleDeleteOption,
    handleInputBlur
  } = useValuesInput({ index, optID, optValue, isLast, handleValue, handleErrors });
  

  return (
    <li className='flex items-center relative z-20'>
      {
        (withDeleteBtn && !isLast)
        &&
        <button type='button' className='text-gray-300 -mt-5 absolute hover:cursor-grab active:cursor-grabbing'>
          <GridIcon size="22px" />
        </button>
      }
      <div className='w-full ml-9 mr-9'>
        <Input
          inputValue={ optValue.value }
          placeholder='Medium'
          type='text'
          error={ error ? 'Option value is required.' : '' }
          onBlur={ handleInputBlur }
          onChange={ (e) =>  { handleInputValue(e); handleAddNewOptionValue(); } }
        />
      </div>
      {
        (withDeleteBtn && !isLast)
        &&
        <button type='button' className='-mt-5 text-gray-600 absolute z-20 right-0' onClick={ handleDeleteOption }>
          <DeleteIcon size='20px' />
        </button>
      }
    </li>
  );
};

export default SortableElement<Props>(OptionValuesInput);
