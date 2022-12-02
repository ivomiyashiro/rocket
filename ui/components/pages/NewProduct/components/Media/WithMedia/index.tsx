import { Dispatch, DragEvent, SetStateAction } from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import { ImageIcon } from 'components/icons';
import ImageCard from './ImageCard';

interface Props {
  dragState: boolean;
  mediaList: { id?: string; file?: File, fileUrl?: string; isChecked?: boolean }[];
  isImageUploding: boolean;
  handleClick: () => void;
  handleMediaMediaImage: Dispatch<SetStateAction<{id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]>>;
}

const WithMedia = ({ 
  mediaList,
  dragState,
  isImageUploding,
  handleClick,
  handleMediaMediaImage,
}: Props) => {
  return (
    <>
      <div className='grid w-full gap-4 grid-cols-3 md:grid-cols-4'>
        {
          mediaList.map((image, i) => {
            return (
              <ImageCard
                key={ i } 
                index={ i }
                image={ image }
                handleMediaMediaImage={ handleMediaMediaImage }
                isSmall
              />
            );
          })
        }
        {
          mediaList?.length >= 1 && mediaList?.length < 5
          &&
          <div className='flex items-center justify-center rounded-md border border-dashed border-gray-300 h-dashboard-add-product-image-sm'>
            <button 
              className="rounded-md bg-indigo-200 px-4 py-1 text-xs text-indigo-600 font-medium hover:text-indigo-800"
              type="button" 
              onClick={ handleClick }
            >
              Add
            </button>
          </div>
        }
      </div>
    </>
  );
};

export default SortableContainer<Props>(WithMedia);
