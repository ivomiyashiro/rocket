import { useContext } from 'react';
import { ProductFormContext } from 'context';
import { OptionCard, OptionNameEdit } from './';
import { SortableContainer, SortableItem } from 'components/ui';

export const OptionsList = () => {

  const { options, handleOptionCardSortEnd } = useContext(ProductFormContext);

  return (
    <div>
      <SortableContainer 
        items={ options } 
        handleItems={ (e) => handleOptionCardSortEnd({ e }) }
      >
        {
          options.map((option, i) => {
            if (option.editing) {
              return (
                <OptionNameEdit key={ i } option={ option } />
              );
            }
        
            return (
              <SortableItem key={ i } id={ option.id }>
                <OptionCard option={ option } />
              </SortableItem>
            );
          })
        }
      </SortableContainer>
    </div>
  );
};
