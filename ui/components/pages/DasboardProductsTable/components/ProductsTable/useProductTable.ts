import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IProduct } from 'interfaces';
import { useMultipleCheckbox } from 'hooks';
import { deleteDBProducts, updateDBProducts } from 'services';

interface Props { 
  products: IProduct[];
  handleProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const useProductTable = ({ products, handleProducts }: Props) => {

  const { 
    checkedState, 
    mainCheckbox, 
    handleCheckboxChange, 
    handleMainCheckboxChange,
    handleDeleteCheckbox,
    handleResetCheckbox
  } = useMultipleCheckbox({ items: products });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    let productsIDsArr: string[] = [];

    checkedState.forEach((check, i) => {
      if (check) { productsIDsArr.push(products[i]?._id!); }
      else { productsIDsArr.filter(id => id !== products[i]?._id);}
    });
    setSelectedProducts(productsIDsArr);
  }, [checkedState, products]);

  const handleDeleteProduct = () => {
    deleteDBProducts({ productsIDs: selectedProducts });
    handleProducts(products.filter(product => !selectedProducts.includes(product._id!) ));
    handleDeleteCheckbox();
    setSelectedProducts([]);
  };

  const handleSetActiveProduct = () => {
    updateDBProducts({ productsIDs: selectedProducts, data: { status: 'ACTIVE' } });
    handleProducts(products.map(product => {
      if (!selectedProducts.includes(product._id!)) return product;

      return {
        ...product,
        status: 'ACTIVE'
      };
    }));

    handleResetCheckbox();
  };

  const handleSetDrafProduct = () => {
    updateDBProducts({ productsIDs: selectedProducts, data: { status: 'DRAFT' } });
    handleProducts(products.map(product => {
      if (!selectedProducts.includes(product._id!)) return product;

      return {
        ...product,
        status: 'DRAFT'
      };
    }));
    
    handleResetCheckbox();
  };

  return {
    checkedState,
    mainCheckbox,
    handleCheckboxChange,
    handleMainCheckboxChange,
    handleDeleteProduct,
    handleSetActiveProduct,
    handleSetDrafProduct,
  };
};
