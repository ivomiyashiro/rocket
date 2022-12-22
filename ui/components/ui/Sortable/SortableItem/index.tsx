import { ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  id: string;
  children: ReactNode;
  disabled?: boolean;
}

export const SortableItem = ({ children, id, disabled = false }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    
  const style = {
    display: 'block',
    zIndex: isDragging ? 1 : 0,
    transform: CSS.Translate.toString(transform),
    width: '100%',
  };
    
  return (
    <>
      {
        !disabled
          ? (
            <div ref={ setNodeRef } style={ style } { ...attributes } { ...listeners }>
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
