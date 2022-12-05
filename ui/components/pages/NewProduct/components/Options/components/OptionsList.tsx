import { Dispatch, SetStateAction } from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import { OptionCard, OptionNameEdit } from './';

interface Props {
  options: { id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[];
  handleOptions:Dispatch<SetStateAction<{ id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[]>>
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
