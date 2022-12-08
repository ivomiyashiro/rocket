import { Dispatch, SetStateAction } from 'react';

import { IOption } from 'interfaces';

import { useNameInput } from './useNameEdit';

import { DeleteIcon } from 'components/icons';
import { Input } from 'components/ui';
import { OptionsInputValuesList } from '..';

interface Props {
  option: IOption;
  handleOptions:Dispatch<SetStateAction<{ id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[]>>
  handleWithOptions: Dispatch<SetStateAction<boolean>>;
}

export const OptionNameEdit = ({ option, handleOptions, handleWithOptions }: Props) => {

  const {
    inputError,
    optionValuesErrors,
    setOptionsValuesErrors,
    handleInputOptionName,
    handleDeleteOption,
    handleEditOption,
    onSortEnd
  } = useNameInput({ option, handleOptions, handleWithOptions });

  return (
    <div className='flex flex-col border-t first:border-none py-5'>
      <div className='flex items-center w-full'>
        <div className='w-full mx-4'>
          <Input 
            label='Option name'
            inputValue={ option.name }
            placeholder='Size'
            type='text'
            error={ inputError }
            onChange={ handleInputOptionName }
          />
        </div>
        <button type='button' className='mt-2 text-gray-600' onClick={ handleDeleteOption }>
          <DeleteIcon size='20px' />
        </button>
      </div>
      <OptionsInputValuesList
        axis='y'
        onSortEnd={ onSortEnd }
        option={ option }
        optionValuesErrors={ optionValuesErrors }
        handleOptions={ handleOptions }
        handleOptionsErrors={ setOptionsValuesErrors }
        distance={ 10 }
      />
      <button 
        type='button'
        className='ml-auto text-sm w-20 bg-indigo-200 rounded-md text-indigo-600 font-medium py-1 mt-2'
        onClick={ handleEditOption }
      >
        Done
      </button>
    </div>
  );
};
