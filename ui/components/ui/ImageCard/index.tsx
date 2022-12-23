import { useState } from 'react';
import Image from 'next/image';

import { IProductFormMedia } from 'context';

import { GridIcon, MoveIcon } from 'components/icons';

interface Props {
  id?: string;
  media: IProductFormMedia;
  withGridLayout?: boolean;
  handleCheckState: any
}

export const ImageCard = ({ id, media, withGridLayout = false, handleCheckState }: Props) => {
  
  const { url, isChecked } = media;
  const [isHover, setHover] = useState(false);

  return (
    <div
      className={ `z-30 flex items-center justify-center border border-gray-300 w-full overflow-hidden relative rounded-md p-4 ${ withGridLayout ? 'first:col-dashboard-add-product-first-img first:row-dashboard-add-product-first-img first:h-full' : 'h-[138px]' }` }
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
        <div className='absolute w-full h-full bg-black bg-opacity-50 p-3 top-0 items-start text-white'>
          <div className='flex justify-between'>
            <input className='w-4 h-4' type="checkbox" checked={ isChecked } onChange={ handleCheckState } />
            { !isChecked && <GridIcon size="22px" /> }
          </div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <MoveIcon size='22px' />
          </div>
        </div>
      }
    </div>
  );
};
