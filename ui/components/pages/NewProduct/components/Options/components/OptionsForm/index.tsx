import { Dispatch, SetStateAction } from 'react';

import { useOptionsForm } from './useOptionsForm';

import { PlusIcon } from 'components/icons';
import OptionsList from '../OptionsList';

interface Props {
  options: { id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[];
  handleOptions:Dispatch<SetStateAction<{ id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[]>>
  handleWithOptions: Dispatch<SetStateAction<boolean>>;
}

export const OptionsForm = ({ options, handleOptions, handleWithOptions }: Props) => {

  const { 
    handleAddNewOption,
    onSortEnd,
    onSortStart,
  } = useOptionsForm({ handleOptions });
  
  return (
    <>
      <OptionsList
        options={ options }
        onSortEnd={ onSortEnd }
        onSortStart={ onSortStart }
        handleOptions={ handleOptions }
        handleWithOptions={ handleWithOptions }
      />
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
