import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from 'interfaces';
import { ImageIcon } from 'components/icons';

interface Props {
  products: IProduct[];
  checkedState: any[];
  handleCheckboxChange: ({ position }: { position: number }) => void;
}

export const ProductList = ({ products, checkedState, handleCheckboxChange }: Props) => {
  return (
    <>
      {
        products?.map((product, i) => {
          let featImg = '';

          product.variants?.length !== 0
            ? featImg = product.variants![0].images[0] || ''
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
    </>
  );
};
