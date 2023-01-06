import { useContext } from 'react';

import { useMedia } from 'hooks';
import { ProductFormContext } from 'context';

import { ImageIcon } from 'components/icons';
import { DashboardCard, Spinner } from 'components/ui';
import { WithoutMedia } from './WithoutMedia';
import { WithMedia } from './WithMedia';

export const Media = () => {

  const {
    options,
    images,
    imgSelectedCount,
    handleDeleteGeneralImage,
    handleAddGeneralImage
  } = useContext(ProductFormContext);

  const {
    isLoading,
    drag,
    inputRef,
    error,
    handleClick,
    handleError,
    handleInputChange,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
  } = useMedia({ media: images, handleMedia: handleAddGeneralImage });

  return (
    <DashboardCard className='p-5'>
      {
        imgSelectedCount > 0
          ? (
            <div className='flex justify-between items-center mb-5'>
              <h3 className='font-medium'>{ imgSelectedCount } Elements selected.</h3>
              <button className='text-sm text-red-500 cursor-pointer hover:underline' onClick={ handleDeleteGeneralImage }> Delete files </button>
            </div>
          )
          : (
            <div className='mb-5'>
              <h3 className='font-medium'>
                { options.length > 0 ? 'General Media' : 'Media'}
              </h3>
            </div>
          )
      }
      {
        !!error 
        &&
        <div className='border border-red-500 bg-red-200 rounded-md mb-4 flex text-red-500 relative p-2'>
          <p className='text-sm'> { error } </p>
          <span className='absolute top-0 right-2 cursor-pointer' onClick={ () => handleError('') }> &times; </span>
        </div>
      }
      <div
        className='w-full flex gap-4 relative z-0'
        onDrop={ handleDrop }
        onDragOver={ handleDragEnter }
        onDragEnter={ handleDragEnter }
        onDragLeave={ handleDragLeave }
      >
        {
          drag
          &&
          <div className='flex items-center justify-center pointer-events-none top-0 w-full h-full z-10 absolute border border-dashed border-indigo-600 bg-indigo-200 rounded-md text-indigo-600'>
            <ImageIcon size="35px" />
          </div>
        }
        {
          isLoading 
          && 
          <div className='flex items-center justify-center pointer-events-none top-0 w-full h-full z-40 absolute border border-dashed border-indigo-600 bg-indigo-200 rounded-md text-indigo-600'>
            <Spinner color='fill-indigo-600' size={ 10 } />
          </div>
        }
        {
          images?.length !== 0
            ? <WithMedia mediaList={ images } handleClick={ handleClick } />
            : <WithoutMedia drag={ drag } handleClick={ handleClick } />
        }
      </div>
      <input type="file" onChange={ handleInputChange } hidden ref={ inputRef } />
    </DashboardCard>
  );
};
