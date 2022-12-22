import { useContext } from 'react';
import { ProductFormContext } from 'context';
import { OptionCard, OptionNameEdit } from './';

export const OptionsList = () => {

  const { options } = useContext(ProductFormContext);

  return (
    <div>
      {
        options.map((option, i) => {
          if (option.editing) {
            return (
              <OptionNameEdit key={ i } option={ option } />
            );
          }
        
          return (
            <OptionCard key={ i } option={ option } 
            />
          );
        })
      }
    </div>
  );
};
