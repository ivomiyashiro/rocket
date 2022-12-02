import { ChangeEvent, Dispatch, DragEvent, RefObject, SetStateAction, useEffect, useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import { uploadImage } from 'services';

interface Props {
  inputRef: RefObject<HTMLInputElement>;
  productMedia: { id?: string; file?: File, fileUrl?: string; isChecked?: boolean }[]
  handleProductMedia: Dispatch<SetStateAction<{id?: string; file?: File, fileUrl?: string; isChecked?: boolean}[]>>
}

export const useMedia = ({ inputRef, productMedia, handleProductMedia }: Props) => {
  
  const MAX_AMOUNT_IMG = 5;
  const [drag, setDrag] = useState(false);
  const [imagesCheckedCount, setImagesCheckedCount] = useState(0);
  const [isImageUploading, setImageUploading] = useState(false);
  const [fileError, setFileError] = useState('');

  useEffect(() => {
    setImagesCheckedCount(0);
    productMedia.map(image => {
      if (image.isChecked) {
        setImagesCheckedCount(prev => prev + 1);
      }
    });
  }, [productMedia]);

  const handleClick = () => inputRef.current?.click();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUploading(true);
    let productMediaLen = productMedia.length;

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
            handleProductMedia(prev => [
              ...prev,
              {
                id: new Date().valueOf().toString(),
                file,
                fileUrl: resp,
                isChecked: false,
              }
            ]);
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
    let productMediaLen = productMedia.length;

    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      const fileTypeError = (file.type !== 'image/jpeg' && file.type !== 'image/png');
      console.log(e.dataTransfer.files && e.dataTransfer.files[i]);
      if (productMediaLen > MAX_AMOUNT_IMG || e.dataTransfer.files.length > MAX_AMOUNT_IMG) {
        setDrag(false);
        return setFileError('* You can only upload 5 images.');

      } else if (fileTypeError) {
        setFileError('* Invalid image extension. (.jpg, .jpeg, .png)');

      } else if (e.dataTransfer.files && e.dataTransfer.files[i]) {
        uploadImage(file)
          .then(resp => {
            handleProductMedia(prev => [
              ...prev,
              {
                id: new Date().valueOf().toString(),
                file,
                fileUrl: resp,
                isChecked: false,
              }
            ]);
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

  const handleDeleteImage = () => {
    handleProductMedia(productMedia.filter(image => !image.isChecked)); 
  };

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    handleProductMedia(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
  };

  return {
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
    handleDeleteImage,
    onSortEnd
  };
};
