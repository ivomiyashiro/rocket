import { useContext } from 'react';

import { IProductFormOption, ProductFormContext } from 'context';

import { DeleteIcon, GridIcon } from 'components/icons';
import { Input } from 'components/ui';

interface Props {
  option: IProductFormOption;
  optValue: { id: string; name: string; error: string };
  isLast: boolean;
  btnVisibles: boolean;
}

export const OptionValuesInput = ({
  option,
  optValue,
  isLast,
  btnVisibles, 
}: Props) => {

  const {
    handleOptionValues,
    handleDeleteOptionValue,
    handleAddNewOptionValue,
    handleOptionValueErrors,
  } = useContext(ProductFormContext);

  return (
    <li className='flex items-center relative z-10'>
      {
        btnVisibles
        &&
        <button type='button' className='text-gray-300 -mt-5 absolute hover:cursor-grab active:cursor-grabbing'>
          <GridIcon size="22px" />
        </button>
      }
      <div className='w-full ml-9 mr-9'>
        <Input
          inputValue={ optValue?.name }
          placeholder='Medium'
          type='text'
          error={ optValue?.error ? 'Option value is required.' : '' }
          onFocus={ () => { isLast && handleAddNewOptionValue({ optID: option.id }); } }
          onBlur={ (e) => handleOptionValueErrors({ optID: option.id ,optValueID: optValue.id, e }) }
          onChange={ (e) => handleOptionValues({ optID: option.id, optValueID: optValue.id, e }) }
        />
      </div>
      {
        btnVisibles
          &&
          <button 
            type='button' 
            className='-mt-5 text-gray-600 absolute z-20 right-0' 
            onClick={ () => handleDeleteOptionValue({ optID: option.id, optValueID: optValue.id }) }
          >
            <DeleteIcon size='20px' />
          </button>
      }
    </li>
  );
};
