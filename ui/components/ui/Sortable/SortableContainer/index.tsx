import { ReactNode } from 'react';
import { DndContext, closestCenter, KeyboardSensor, useSensor, useSensors, DragEndEvent, MouseSensor } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

interface Props {
  items: any[];
  children: ReactNode;
  handleItems: (e: DragEndEvent) => void;
}

export const SortableContainer = ({ items, children, handleItems }: Props) => {
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  
  return (
    <DndContext 
      sensors={ sensors }
      collisionDetection={ closestCenter }
      onDragEnd={ handleItems }  
    >
      <SortableContext items={ items }>
        { children }
      </SortableContext>
    </DndContext>
  );
};
