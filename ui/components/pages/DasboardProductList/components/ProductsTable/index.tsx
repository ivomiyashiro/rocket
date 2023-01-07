import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IProduct } from 'interfaces';

import { useProductTable } from './useProductTable';
import { ImageIcon } from 'components/icons';
import { Spinner } from 'components/ui';
import { ProductTableMenu } from '../ProductsTableMenu';

interface Props { 
  products: IProduct[];
  isLoading: boolean;
  activeTab: any;
  handleProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const ProductsTable = ({ products, isLoading, activeTab, handleProducts }: Props) => {

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
    <div className='flex justify-center relative'>
      {
        isLoading
        &&
        <div className='absolute flex items-center w-full bg-[#EBF9FB] shadow-sm p-2 px-[1rem]'>
          <Spinner size={ 4 } color='fill-sky-600' />
          <p className='text-sm text-sky-600'>Loading products...</p>
        </div>
      }
      <div className='overflow-x-auto overflow-b overscroll-x-contain'>
        {
          products.length !== 0
            ? (
              <>
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
                    {
                      products?.map((product, i) => {
                        let featImg = '';

                        product.variants?.length !== 0
                          ? featImg = product.variants![0].images[0] 
                          : featImg = product.images[0] || '';

                        return (
                          <tr key={ product._id } className='hover:bg-gray-50 cursor-pointer'>
                            <td className='border-t h-[57px] font-medium text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                              <input 
                                type="checkbox" 
                                id={ `custom-checkbox-${ product._id }` }
                                name={ product.title }
                                value={ product.title }
                                checked={ checkedState[i] }
                                onChange={ () => handleCheckboxChange({ position: i }) }
                              />
                            </td>
                            <td className='border-t h-[57px] font-medium text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] pr-[1rem]'>
                              <div className='relative border rounded-md min-h-[40px] min-w-[40px] flex items-center justify-center'>
                                {
                                  featImg !== ''
                                    ? (
                                      <Image
                                        src={ featImg }
                                        alt={ product.title }
                                        sizes='33vw'
                                        placeholder="blur"
                                        style={ { objectFit: 'contain' } }
                                        blurDataURL={ featImg }
                                        fill
                                      />
                                    )
                                    : <ImageIcon size='20px' />
                                }
                              </div>
                            </td>
                            <td className='border-t h-[57px] font-semibold text-sm text-gray-900 text-left py-[0.5rem] px-[1rem] max-w-[15vw] min-w-[12.5rem]'>
                              <div>
                                <Link href={ `/dashboard/products/${ product._id }` }>
                                  <span className='hover:underline'>
                                    { product.title }
                                  </span>
                                </Link>
                              </div>
                            </td>
                            <td className='border-t h-[57px] font-normal text-xs whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                              { 
                                product.status === 'ACTIVE' 
                                  ? <div className='w-16 py-[0.2rem] px-[0.1rem] bg-green-200 text-green-900 flex justify-center items-center rounded-xl'>Active</div>
                                  : <div className='w-16 py-[0.2rem] px-[0.1rem] bg-sky-200 text-sky-800 flex justify-center items-center rounded-xl'>Draft</div>
                              }
                            </td>
                            <td className='border-t h-[57px] font-normal text-sm text-gray-600 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                              <div className={ `${ product.inventory === '0' && 'text-red-600' }` }>
                                { product.inventory } in stock { product.variants?.length !== 0 && `for ${ product.variants?.length } variants` }
                              </div>
                            </td>
                            <td className='border-t h-[57px] font-normal text-sm text-gray-600 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                              <div>
                                { product.category }
                              </div>
                            </td>
                            <td className='border-t h-[57px] font-normal text-sm text-gray-600 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                              <div>
                                { product.vendor }
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    }
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
              </>
            )
            : (
              <div className='py-14 text-center'>
                <h2 className='font-semibold text-lg'>No { activeTab } products</h2>
                <p className='text-sm text-gray-500 py-4'>
                  {
                    activeTab === 'Draft'
                    &&
                    'Set products as draft if they still need work.'
                  }
                  {
                    activeTab === 'Active'
                    &&
                    'Set products as active when they’re ready to be sold.'
                  }
                </p>
              </div>
            )
        }
      </div>
    </div>
  );
};
