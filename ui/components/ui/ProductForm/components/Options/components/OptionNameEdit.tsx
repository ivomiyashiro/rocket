import { useContext } from 'react';

import { IProductFormOption, ProductFormContext } from 'context';

import { DeleteIcon } from 'components/icons';
import { Input } from 'components/ui';
import { OptionsInputValuesList } from './';

interface Props { option: IProductFormOption; }

export const OptionNameEdit = ({ option }: Props) => {

  const {
    handleOptionNameValue,
    handleDeleteOption,
    handleFinishEditing
  } = useContext(ProductFormContext);

  return (
    <div className='flex flex-col border-t first:border-none py-5'>
      <div className='flex items-center w-full'>
        <div className='w-full mx-4'>
          <Input 
            label='Option name'
            inputValue={ option.name.value }
            placeholder='Size'
            type='text'
            error={ option.name.error }
            onChange={ (e) => handleOptionNameValue({ optID: option.id , e }) }
          />
        </div>
        <button type='button' className='mt-2 text-gray-600' onClick={ () => handleDeleteOption({ optID: option.id }) }>
          <DeleteIcon size='20px' />
        </button>
      </div>
      <OptionsInputValuesList option={ option } />
      <button 
        type='button'
        className='ml-auto text-sm w-20 bg-indigo-200 rounded-md text-indigo-600 font-medium py-1 mt-2'
        onClick={ () => { handleFinishEditing({ option }); } }
      >
        Done
      </button>
    </div>
  );
};
