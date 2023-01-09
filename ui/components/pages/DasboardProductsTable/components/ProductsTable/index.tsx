import { Dispatch, SetStateAction } from 'react';

import { IProduct } from 'interfaces';

import { useProductTable } from './useProductTable';
import { Spinner } from 'components/ui';
import { ProductTableMenu, ProductList, NoProductsFound } from '../';

interface Props { 
  products: IProduct[];
  isLoading: boolean;
  activeTab: 'All' | 'Active' | 'Draft';
  searchValue: string;
  handleProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const ProductsTable = ({ products, isLoading, activeTab, searchValue, handleProducts }: Props) => {

  const {
    checkedState,
    mainCheckbox,
    handleCheckboxChange,
    handleMainCheckboxChange,
    handleDeleteProduct,
    handleSetActiveProduct,
    handleSetDrafProduct,
  } = useProductTable({ products, handleProducts });

  return (
    <div className='relative'>
      {
        isLoading
        &&
        <div className='absolute flex items-center bg-[#EBF9FB] shadow-sm p-2 px-[1rem] z-10 top-[-3px] w-full'>
          <Spinner size={ 4 } color='fill-sky-600' />
          <p className='text-sm text-sky-600'>Loading products...</p>
        </div>
      }
      <div className='overflow-x-auto overflow-b overscroll-x-contain w-full'>
        {
          products.length === 0
            ? <NoProductsFound activeTab={ activeTab } searchValue={ searchValue } />
            :  (
              <div className='flex justify-center relative'>
                <table className='w-full min-w-full border-collapse'>
                  <thead>
                    <tr>
                      <th className='font-medium text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                        <input 
                          type="checkbox" 
                          id={ 'custom-checkbox-header' }
                          name='check-all'
                          value='check-all'
                          checked={ mainCheckbox }
                          onChange={ handleMainCheckboxChange }
                        />
                      </th>
                      <th className='font-semibold text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem] w-[56px]'></th>
                      <th className='font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem] max-w-[15vw] min-w-[12.5rem]'>Product</th>
                      <th className='min-w-[110px] font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>Status</th>
                      <th className='min-w-[110px] font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>Inventory</th>
                      <th className='min-w-[110px] font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>Type</th>
                      <th className='min-w-[110px] font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>Vendor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ProductList 
                      products={ products }
                      checkedState={ checkedState }
                      handleCheckboxChange={ handleCheckboxChange }
                    />
                  </tbody>
                </table>
                {
                  checkedState.filter(Boolean).length > 0
                  &&
                  <ProductTableMenu
                    handleSetActiveProduct={ handleSetActiveProduct }
                    handleSetDrafProduct={ handleSetDrafProduct }
                    handleDeleteProduct={ handleDeleteProduct }
                  />
                }
              </div>
            )
        }
      </div>
    </div>
  );
};
