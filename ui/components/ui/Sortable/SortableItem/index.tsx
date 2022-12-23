import { ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  id: string;
  index?: number;
  children: ReactNode;
  withGridLayout?: boolean;
  disabled?: boolean;
}

export const SortableItem = ({ 
  children, 
  id, 
  index, 
  withGridLayout = false, 
  disabled = false 
}: Props) => {

  const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({ id });

  const style = {
    display: 'block',
    zIndex: isDragging ? 1 : 0,
    transform: CSS.Translate.toString(transform),
    width: '100%',
  };
  
  const firstGridStyle = {
    ...style,
    gridColumn: withGridLayout ? '1/span 2' : '',
    gridRow: withGridLayout ? '1/span 2' : '',
    height: '292px'
  };

  const gridStyles = {
    ...style,
    height: '138px'
  };

  return (
    <>
      {
        !disabled
          ? (
            <div 
              ref={ setNodeRef } 
              style={ withGridLayout ? ( index === 0 ? firstGridStyle : gridStyles ) : style  } 
              { ...attributes } 
              { ...listeners }
            >
              { children }
            </div>
          )
          :
          <div>
            { children }
          </div>
      }
    </>
  );
};
