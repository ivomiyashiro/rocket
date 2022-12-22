import { useContext } from 'react';

import { ProductFormContext } from 'context';

import { PlusIcon } from 'components/icons';
import { OptionsList } from './OptionsList';

export const OptionsForm = () => {

  const { options, handleAddNewOption } = useContext(ProductFormContext);

  return (
    <>
      <OptionsList />
      {
        options.length < 3
        &&
        <div className='border-t'>
          <button type='button' className='text-sm flex items-center gap-2 pb-5 pt-4 text-blue-500' onClick={ handleAddNewOption }>
            <PlusIcon size='22px' />
            Add another option
          </button>
        </div>
      }
    </>
  );
};
