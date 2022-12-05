import { Dispatch, SetStateAction } from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { GridIcon } from 'components/icons';

interface Props {
  option: { id: number; name: string; values: {id: number; value: string}[]; editing: boolean; };
  handleOptions: Dispatch<SetStateAction<{ id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[]>>
}

const OptionCard = ({ option, handleOptions }: Props) => {

  const handleEdit = () => {
    handleOptions(prev => {
      return prev.map(opt => {
        if (opt.id !== option.id) return opt; 
        const newValues = [...opt.values, { id: new Date().valueOf(), value: '' }];
        return { ...opt, values: newValues, editing: true };
      });
    });
  };

  return (
    <div className='flex justify-between items-start py-4 bg-white border-t first:border-none'>
      <button type='button' className='text-gray-300 py-1'>
        <GridIcon size="22px" />
      </button>
      <div className='w-full flex flex-col gap-2 px-6'>
        <h3 className='text-sm font-medium'>{ option.name }</h3>
        <div className='flex gap-2'>
          {
            option.values.map((value, i) => (
              <div key={ i } className='py-1 px-2 bg-gray-200 rounded-xl'>
                <p className='text-xs'>{ value.value }</p>
              </div>
            ))
          }
        </div>
      </div>
      <button type='button' className='py-1 text-sm text-blue-500 hover:underline' onClick={ handleEdit }>
        Edit
      </button>
    </div>
  );
};

export default SortableElement<Props>(OptionCard);
