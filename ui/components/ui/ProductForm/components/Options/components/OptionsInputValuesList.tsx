import { SortableContainer } from 'components/ui/Sortable';
import { IProductFormOption, ProductFormContext } from 'context';
import { useContext } from 'react';
import { OptionValuesInput } from './';

interface Props { option: IProductFormOption;  }

export const OptionsInputValuesList = ({ option }: Props) => {
  
  const { handleOptionValueSortEnd } = useContext(ProductFormContext);

  return (
    <div className='flex items-center w-full pl-4 z-0'>
      <div className='w-full ml-4'>
        <label className='text-sm mb-2 ml-10 inline-block text-gray-600'>Option values</label>
        <SortableContainer 
          items={ option.values }
          handleItems={ (e) => handleOptionValueSortEnd({ optID: option.id, e }) }
        >
          <ul>
            {
              option.values.map(( optVal, i ) => {
                const optionValuesLength = option.values.length;
                const isLast = optionValuesLength === (i + 1);
                const withDeleteBtn = option.values.length > 2;

                return (
                  <OptionValuesInput
                    key={ i }
                    option={ option }
                    optValue={ optVal }
                    btnVisibles={ withDeleteBtn && !isLast }
                    isLast={ isLast }
                  />
                );
              })
            }
          </ul>
        </SortableContainer>
      </div>
    </div>
  );
};
