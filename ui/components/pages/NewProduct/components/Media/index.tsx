import { Dispatch, SetStateAction, useRef } from 'react';
import { useMedia } from './useMedia';
import { DashboardCard } from 'components/ui';
import WithMedia from './WithMedia';
import { WithoutMedia } from './WithoutMedia';
import { ImageIcon } from 'components/icons';

interface Props {
  productMedia: {id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]
  handleProductMedia: Dispatch<SetStateAction<{id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]>>
}

export const Media = ({ productMedia, handleProductMedia }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const {
    drag,
    imagesCheckedCount,
    fileError,
    isImageUploading,
    setFileError,
    handleInputChange,
    handleClick,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDeleteImage,
    onSortEnd 
  } = useMedia({ inputRef, productMedia, handleProductMedia });
  
  return (
    <DashboardCard className='p-5'>
      {
        imagesCheckedCount > 0
          ? (
            <div className='flex justify-between items-center'>
              <h3 className='font-medium mb-3'>{ imagesCheckedCount } Elements selected.</h3>
              <button className='text-sm text-red-500 cursor-pointer hover:underline' onClick={ handleDeleteImage }> Delete files </button>
            </div>
          )
          : <h3 className='font-medium mb-5'>Media</h3>
      }
      {
        !!fileError 
        &&
        <div className='border border-red-500 bg-red-200 rounded-md mb-4 flex text-red-500 relative p-2'>
          <p className='text-sm'> { fileError } </p>
          <span className='absolute top-0 right-2 cursor-pointer' onClick={ () => setFileError('') }> &times; </span>
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
          isImageUploading
          &&
          <div className='flex items-center justify-center pointer-events-none top-0 w-full h-full z-10 absolute border border-dashed border-indigo-600 bg-indigo-200 rounded-md text-indigo-600'>
            <div role="status">
              <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-indigo-300 fill-indigo-600" viewBox="0 0 100 101" fill="none">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        {
          productMedia?.length !== 0
            ? (
              <WithMedia
                axis='xy'
                onSortEnd={ onSortEnd }
                mediaList={ productMedia }
                handleClick={ handleClick }
                handleMediaMediaImage={ handleProductMedia }
              />
            )
            : (
              <div className={ `flex items-center justify-center gap-2 w-full p-4 border border-dashed rounded-md bg-gray-100 min-h-dashboard-add-product-media ${ drag ? 'border-indigo-500' : 'border-gray-300'}` }>
                <WithoutMedia handleClick={ handleClick } />
              </div>
            )
        }
      </div>
      <input type="file" onChange={ handleInputChange } hidden ref={ inputRef } />
    </DashboardCard>
  );
};
