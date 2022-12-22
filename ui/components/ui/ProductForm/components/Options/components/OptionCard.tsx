import { useContext } from 'react';
import { IProductFormOption, ProductFormContext } from 'context';
import { GridIcon } from 'components/icons';

interface Props { option: IProductFormOption; }

export const OptionCard = ({ option }: Props) => {

  const { handleToggleEditStatus } = useContext(ProductFormContext);

  return (
    <div className='flex justify-between items-start py-4 bg-white border-t first:border-none'>
      <button type='button' className='text-gray-300 py-1'>
        <GridIcon size="22px" />
      </button>
      <div className='w-full flex flex-col gap-2 px-6'>
        <h3 className='text-sm font-medium'>{ option.name.value }</h3>
        <div className='flex gap-2'>
          {
            option.values.map((value, i) => (
              <div key={ i } className='py-1 px-2 bg-gray-200 rounded-xl'>
                <p className='text-xs'>{ value.name }</p>
              </div>
            ))
          }
        </div>
      </div>
      <button type='button' className='py-1 text-sm text-blue-500 hover:underline' onClick={ () => handleToggleEditStatus({ optID: option.id }) }>
        Edit
      </button>
    </div>
  );
};
