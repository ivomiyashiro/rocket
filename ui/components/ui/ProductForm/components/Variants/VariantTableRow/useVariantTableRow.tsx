import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { IVariant } from 'interfaces';

interface Props {
  variant: IVariant;
  handleVariants: Dispatch<SetStateAction<IVariant[]>>
}

export const useVariantTableRow = ({ variant, handleVariants }: Props) => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleVariantPrice = (e: ChangeEvent<HTMLInputElement>) => {
    handleVariants(prev => {
      return prev.map(vari => {
        if (vari.id !== variant.id) return vari;

        return {
          ...vari,
          price: e.target.value
        };
      });
    });
  };

  const handleDiscountPrice = (e: ChangeEvent<HTMLInputElement>) => {
    handleVariants(prev => {
      return prev.map(vari => {
        if (vari.id !== variant.id) return vari;

        return {
          ...vari,
          price: e.target.value
        };
      });
    });
  };

  const handleInventoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleVariants(prev => {
      return prev.map(vari => {
        if (vari.id !== variant.id) return vari;
        if (e.target.value === '') return vari;

        return {
          ...vari,
          inventory: e.target.value
        };
      });
    });
  };

  const handleIncreaseInventory = () => {
    handleVariants(prev => {
      return prev.map(vari => {
        if (vari.id !== variant.id) return vari;

        return {
          ...vari,
          inventory: (+vari.inventory + 1).toString()
        };
      });
    });
  };

  const handleDecreaseInventory = () => {
    handleVariants(prev => {
      return prev.map(vari => {
        if (vari.id !== variant.id) return vari;
        if (vari.inventory === '0') return vari;

        return {
          ...vari,
          inventory: (+vari.inventory - 1).toString()
        };
      });
    });
  };

  const handleSKU = (e: ChangeEvent<HTMLInputElement>) => {
    handleVariants(prev => {
      return prev.map(vari => {
        if (vari.id !== variant.id) return vari;

        return {
          ...vari,
          sku: e.target.value
        };
      });
    });
  };

  const handleBarcode = (e: ChangeEvent<HTMLInputElement>) => {
    handleVariants(prev => {
      return prev.map(vari => {
        if (vari.id !== variant.id) return vari;

        return {
          ...vari,
          barcode: e.target.value
        };
      });
    });
  };

  const handleVariantMedia = (imageUrl: string) => {
    handleVariants(prev => {
      return prev.map(vari => {
        if (vari.id !== variant.id) return vari;

        return { ...vari, images: [ ...vari.images, {
          id: Math.random().toString(),
          url: imageUrl,
          isChecked: false
        }] };
      });
    });
  };

  return { 
    isPopupOpen, setPopupOpen,
    inputRef, handleVariantMedia,
    handleVariantPrice, handleDiscountPrice,
    handleInventoryChange, handleIncreaseInventory,
    handleDecreaseInventory, handleSKU,
    handleBarcode
  };
};
