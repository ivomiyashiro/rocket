import { useContext } from 'react';

import { useMedia } from 'hooks';
import { IProductFormMedia, ProductFormContext } from 'context';

import { ImageCard, SortableContainer, SortableItem, Spinner } from 'components/ui';

interface Props {
  variantID: string;
  media: IProductFormMedia[];
}

export const VariantMedia = ({ variantID, media }: Props) => {
  
  const { 
    imgSelectedCount, 
    handleVariantMedia, 
    handleToggleImageCheckState, 
    handleDeleteVariantImages,
    handleImageSortEnd
  } = useContext(ProductFormContext);
  
  const {
    isLoading,
    drag,
    inputRef,
    handleClick,
    handleInputChange,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
  } = useMedia({ id: variantID, media, handleMedia: handleVariantMedia });
  console.log(isLoading);
  return (
    <div className='relative'>
      <div className='flex justify-between'>
        <p className="text-gray-600 text-sm">You can only choose images as variant media</p>
        {
          imgSelectedCount > 0
          &&
          <button className='text-sm text-red-500 cursor-pointer hover:underline' onClick={ () => handleDeleteVariantImages({ variantID }) }> 
            Delete files 
          </button>
        }
      </div>
      <SortableContainer 
        items={ media } 
        handleItems={ (e) => handleImageSortEnd({ variantID, e }) }
      >
        <div 
          className='grid grid-cols-4 gap-[0.5rem] mt-4'
          onDrop={ handleDrop }
          onDragOver={ handleDragEnter }
          onDragEnter={ handleDragEnter }
          onDragLeave={ handleDragLeave }
        >
          <button type='button' className='w-[139px] h-[139px] border border-dashed border-gray-300 flex items-center justify-center rounded-md hover:bg-gray-50 outline-none' onClick={ handleClick }>
            <div className='p-1 px-2 border-indigo-600 bg-indigo-200 rounded-md text-indigo-600'>
              <p className='text-xs font-medium'> Add image </p>
            </div>
            <input type="file" ref={ inputRef } onChange={ handleInputChange } hidden />
          </button>
          {
            (media?.length !== 0)
            &&
            media?.map((img, i) => {
              return (
                <SortableItem key={ i } id={ img.id }>
                  <ImageCard
                    id={ variantID }
                    media={ img }
                    handleCheckState={ () => handleToggleImageCheckState({ imageID: img.id, variantID }) }
                  />
                </SortableItem>
              );
            })
          }
        </div>
        {
          drag
          &&
          <div className='flex items-center justify-center pointer-events-none top-0 w-full h-full z-30 absolute border border-dashed border-indigo-600 bg-indigo-200 rounded-md text-indigo-600'>
            <p className='text-sm'>Drop the image to upload.</p>
          </div>
        }
        {
          isLoading
          &&
          <div className='flex items-center justify-center pointer-events-none top-0 w-full h-full z-30 absolute border border-dashed border-indigo-600 bg-indigo-200 rounded-md text-indigo-600'>
            <Spinner color='fill-red-600' />
          </div>
        }
      </SortableContainer>
    </div>
  );
};
