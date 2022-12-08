import { Dispatch, SetStateAction } from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import { IOption } from 'interfaces';

import { OptionCard, OptionNameEdit } from '.';

interface Props {
  options: IOption[];
  handleOptions:Dispatch<SetStateAction<IOption[]>>
  handleWithOptions: Dispatch<SetStateAction<boolean>>;
}

const OptionsList = ({ options, handleOptions, handleWithOptions }: Props) => {
  return (
    <div>
      {
        options.map((option, i) => {
          if (option.editing) {
            return (
              <OptionNameEdit
                key={ i } 
                option={ option } 
                handleOptions={ handleOptions } 
                handleWithOptions={ handleWithOptions }
              />
            );
          }
        
          return (
            <OptionCard key={ i } index={ i } option={ option } handleOptions={ handleOptions } />
          );
        })
      }
    </div>
  );
};

export default SortableContainer<Props>(OptionsList);
