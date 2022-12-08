import { Dispatch, SetStateAction } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { IOption } from 'interfaces';
import { OptionsValuesInput } from '.';

interface Props {
  option: IOption;
  optionValuesErrors: number[];
  handleOptions:Dispatch<SetStateAction<IOption[]>>
  handleOptionsErrors: Dispatch<SetStateAction<number[]>>;
}

const OptionsInputValuesList = ({ option, optionValuesErrors, handleOptions, handleOptionsErrors }: Props) => {
  return (
    <div className='flex items-center w-full pl-4'>
      <div className='w-full ml-4'>
        <label className='text-sm mb-2 ml-10 inline-block text-gray-600'>Option values</label>
        <ul>
          {
            option.values.map(( optValues, i ) => {
              const isLast = option.values.length === (i + 1);
              const withDeleteBtn = option.values.length > 2;
              const error = optionValuesErrors.includes(i);
              
              return (
                <OptionsValuesInput
                  key={ i }
                  index={ i }
                  optID={ option.id } 
                  optValue={ optValues } 
                  withDeleteBtn={ withDeleteBtn }
                  handleValue={ handleOptions }
                  handleErrors={ handleOptionsErrors }
                  isLast={ isLast }
                  error={ error }
                  disabled={ isLast ? true : false }
                />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default SortableContainer<Props>(OptionsInputValuesList);
