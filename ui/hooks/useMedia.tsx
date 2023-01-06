import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { IProductFormMedia } from 'context';
import { uploadImage } from 'services';

interface Props {
  id?: string;
  media: IProductFormMedia[];
  handleMedia: any
}

const MAX_AMOUNT_IMG = 5;

export const useMedia = ({ id, media, handleMedia }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  
  const handleClick = () => inputRef.current?.click();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    let productMediaLength = media.length;

    if (e.target.files?.length === 0) {
      return setLoading(false);
    }

    for (let i = 0; i < e.target.files!.length; i++) {
      const file = e.target.files![i];
      const fileTypeError = file.type !== 'image/jpeg' && file.type !== 'image/png';

      if (productMediaLength > MAX_AMOUNT_IMG || e.target.files!.length > MAX_AMOUNT_IMG) {
        return setError('* You can only upload 5 images.');

      } else if (fileTypeError) {
        setError('* Invalid image extension. (.jpg, .jpeg, .png)');

      } else if (e.target.files && e.target.files[i]) {
        uploadImage(file)
          .then(resp => {
            id ? handleMedia({ id, imageUrl: resp }) : handleMedia({ imageUrl: resp });
            setLoading(false);
          })
          .catch(error => console.log(error));  
        productMediaLength++;
      }
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    let productMediaLen = media.length;

    if (e.dataTransfer.files?.length === 0) {
      return setLoading(false);
    }

    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      const fileTypeError = (file.type !== 'image/jpeg' && file.type !== 'image/png');
      
      if (productMediaLen > MAX_AMOUNT_IMG || e.dataTransfer.files.length > MAX_AMOUNT_IMG) {
        setDrag(false);
        return setError('* You can only upload 5 images.');

      } else if (fileTypeError) {
        setError('* Invalid image extension. (.jpg, .jpeg, .png)');

      } else if (e.dataTransfer.files && e.dataTransfer.files[i]) {
        uploadImage(file)
          .then(resp => {
            id ? handleMedia({ id, imageUrl: resp }) : handleMedia({ imageUrl: resp });
            setLoading(false);
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
    drag,
    inputRef,
    error,
    isLoading,
    handleError: setError,
    handleClick,
    handleInputChange,
    handleDrop,
    handleDragEnter,
    handleDragLeave
  };
};
