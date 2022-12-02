import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { SortableElement } from 'react-sortable-hoc';

import { GridIcon } from 'components/icons';

interface Props {
  image: { id?: string; file?: File, fileUrl?: string; isChecked?: boolean };
  isSmall?: boolean;
  handleMediaMediaImage: Dispatch<SetStateAction<{id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]>>;
}

const ImageCard = ({ image, isSmall = false, handleMediaMediaImage }: Props) => {
  
  const { id, file, fileUrl, isChecked } = image;
  const [isHover, setHover] = useState(false);

  const handleInputChange = () => {
    handleMediaMediaImage(prev => (
      prev.map(image => {
        if (image.id !== id) return image;
        return {
          ...image,
          isChecked: !isChecked
        };
      })
    ));
  };

  return (
    <div
      className='flex items-center justify-center border border-gray-300 w-full h-dashboard-add-product-image-sm overflow-hidden relative rounded-md p-4 first:col-dashboard-add-product-first-img first:row-dashboard-add-product-first-img first:h-dashboard-add-product-image-base'
      onMouseEnter={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }
    >
      <div className='relative w-full h-full'>
        <Image
          src={ fileUrl! }
          alt={ file!.name }
          sizes='33vw'
          placeholder="blur"
          style={ { objectFit: 'contain' } }
          blurDataURL={ fileUrl! }
          fill
        />
      </div>
      {
        (isHover || isChecked)
        &&
        <div className='absolute w-full h-full bg-black bg-opacity-50 flex justify-between p-3 top-0 items-start text-white'>
          <input className='w-4 h-4' type="checkbox" checked={ isChecked } onChange={ handleInputChange } />
          {
            !isChecked && <GridIcon size="22px" />
          }
        </div>
      }
    </div>
  );
};

export default SortableElement<Props>(ImageCard);
