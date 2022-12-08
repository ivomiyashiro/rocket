import { useVariantMedia } from './useVariantMedia';
import { ImageCard } from 'components/ui';

interface Props {
  variantImages: { id: string; url: string; isChecked: boolean }[];
  handleVariantImages: (imageUrl: string) => void;
}

export const VariantMedia = ({ variantImages, handleVariantImages }: Props) => {

  const {
    inputRef,
    drag,
    imagesCheckedCount,
    fileError,
    isImageUploading,
    setFileError,
    handleClick,
    handleInputChange,
    handleDrop,
    handleDragEnter,
    handleDragLeave 
  } = useVariantMedia({ variantImages, handleVariantImages });

  return (
    <div className='relative'>
      <p className="text-gray-600 text-sm">You can only choose images as variant media</p>
      <div 
        className='grid grid-cols-4 gap-[0.5rem] mt-4'
        onDrop={ handleDrop }
        onDragOver={ handleDragEnter }
        onDragEnter={ handleDragEnter }
        onDragLeave={ handleDragLeave }
      >
        <button className='w-[139px] h-[139px] border border-dashed border-gray-300 flex items-center justify-center rounded-md hover:bg-gray-50 outline-none' onClick={ handleClick }>
          <div className='p-1 px-2 border-indigo-600 bg-indigo-200 rounded-md text-indigo-600'>
            <p className='text-xs font-medium'>Add image</p>
          </div>
          <input type="file" ref={ inputRef } onChange={ handleInputChange } hidden />
        </button>
        {
          (variantImages?.length !== 0)
          &&
          variantImages?.map((img, i) => {
            return (
              <ImageCard 
                key={ i } 
                image={ img } 
                // handleProductMedia={ handleVariantImages } 
              />
            );
          })
        }
      </div>
      {
        drag
        &&
        <div className='flex items-center justify-center pointer-events-none top-0 w-full h-full z-10 absolute border border-dashed border-indigo-600 bg-indigo-200 rounded-md text-indigo-600'>
          <p className='text-sm'>Drop the image to upload.</p>
        </div>
      }
    </div>
  );
};
