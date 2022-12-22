import { useState } from 'react';
import Image from 'next/image';

import { IProductFormMedia } from 'context';

import { GridIcon } from 'components/icons';

interface Props {
  id: string;
  media: IProductFormMedia;
  handleCheckState: ({ variantID, imageID }: { variantID: string; imageID: string; }) => void
}

export const ImageCard = ({ id, media, handleCheckState }: Props) => {
  
  const { id: imageID, url, isChecked } = media;
  const [isHover, setHover] = useState(false);

  return (
    <div
      className='z-30 flex items-center justify-center border border-gray-300 w-full h-dashboard-add-product-image-sm overflow-hidden relative rounded-md p-4 first:col-dashboard-add-product-first-img first:row-dashboard-add-product-first-img first:h-dashboard-add-product-image-base'
      onMouseEnter={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }
    >
      <div className='relative w-full h-full'>
        <Image
          src={ url }
          alt={ `product-img-${ id }` }
          sizes='33vw'
          placeholder="blur"
          style={ { objectFit: 'contain' } }
          blurDataURL={ url }
          fill
        />
      </div>
      {
        (isHover || isChecked)
        &&
        <div className='absolute w-full h-full bg-black bg-opacity-50 flex justify-between p-3 top-0 items-start text-white'>
          <input className='w-4 h-4' type="checkbox" checked={ isChecked } onChange={ () => handleCheckState({ variantID: id, imageID: imageID }) } />
          { !isChecked && <GridIcon size="22px" /> }
        </div>
      }
    </div>
  );
};
