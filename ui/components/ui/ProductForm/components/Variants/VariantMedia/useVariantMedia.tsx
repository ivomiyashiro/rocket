import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { uploadImage } from 'services';

interface Props {
  variantImages: { id: string; url: string; isChecked: boolean }[];
  handleVariantImages: (imageUrl: string) => void;
}

export const useVariantMedia = ({ variantImages, handleVariantImages }: Props) => {
  
  const MAX_AMOUNT_IMG = 5;
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  const [imagesCheckedCount, setImagesCheckedCount] = useState(0);
  const [isImageUploading, setImageUploading] = useState(false);
  const [fileError, setFileError] = useState('');

  const handleClick = () => inputRef.current?.click();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUploading(true);
    let productMediaLen = variantImages.length;

    for (let i = 0; i < e.target.files!.length; i++) {
      const file = e.target.files![i];
      const fileTypeError = file.type !== 'image/jpeg' && file.type !== 'image/png';

      if (productMediaLen > MAX_AMOUNT_IMG || e.target.files!.length > MAX_AMOUNT_IMG) {
        return setFileError('* You can only upload 5 images.');

      } else if (fileTypeError) {
        setFileError('* Invalid image extension. (.jpg, .jpeg, .png)');

      } else if (e.target.files && e.target.files[i]) {
        uploadImage(file)
          .then(resp => {
            handleVariantImages(resp);
            setImageUploading(false);
          })
          .catch(error => console.log(error));  
        productMediaLen++;
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setImageUploading(true);
    let productMediaLen = variantImages.length;

    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      const fileTypeError = (file.type !== 'image/jpeg' && file.type !== 'image/png');
      
      if (productMediaLen > MAX_AMOUNT_IMG || e.dataTransfer.files.length > MAX_AMOUNT_IMG) {
        setDrag(false);
        return setFileError('* You can only upload 5 images.');

      } else if (fileTypeError) {
        setFileError('* Invalid image extension. (.jpg, .jpeg, .png)');

      } else if (e.dataTransfer.files && e.dataTransfer.files[i]) {
        uploadImage(file)
          .then(resp => {
            handleVariantImages(resp);
            setImageUploading(false);
          })
          .catch(error => console.log(error));  
        productMediaLen++;
      }
    }
    setDrag(false);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
  };

  return {
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
    handleDragLeave,
  };
};
