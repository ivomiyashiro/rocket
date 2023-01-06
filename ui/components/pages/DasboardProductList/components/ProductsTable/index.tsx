import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from 'interfaces';
import { ImageIcon } from 'components/icons';

interface Props {
  products: IProduct[]
}

export const ProductsTable = ({ products }: Props) => {
  return (
    <div className='overflow-x-auto overflow-b overscroll-x-contain'>
      <table className='w-full min-w-full border-collapse'>
        <thead>
          <tr>
            <th className='font-medium text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
              <input type="checkbox" />
            </th>
            <th className='font-semibold text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem] w-[56px]'></th>
            <th className='font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem] max-w-[15vw] min-w-[12.5rem]'>Product</th>
            <th className='min-w-[110px] font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>Status</th>
            <th className='min-w-[110px] font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>Inventory</th>
            <th className='min-w-[110px] font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>Price</th>
            <th className='min-w-[110px] font-normal text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>Discount Price</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map(product => {
              return (
                <tr key={ product._id } className='hover:bg-gray-50 cursor-pointer'>
                  <th className='border-t h-[57px] font-medium text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                    <input type="checkbox" />
                  </th>
                  <th className='border-t h-[57px] font-medium text-xs text-gray-500 whitespace-nowrap text-left py-[0.5rem] pr-[1rem]'>
                    <div className='relative border rounded-md min-h-[40px] min-w-[40px] flex items-center justify-center'>
                      {
                        product.images.length !== 0
                          ? (
                            <Image
                              src={ product.images[0]! }
                              alt={ product.title }
                              sizes='33vw'
                              placeholder="blur"
                              style={ { objectFit: 'contain' } }
                              blurDataURL={ product.images[0] }
                              fill
                            />
                          )
                          : <ImageIcon size='20px' />
                      }
                    </div>
                  </th>
                  <th className='border-t h-[57px] font-semibold text-sm text-gray-900 text-left py-[0.5rem] px-[1rem] max-w-[15vw] min-w-[12.5rem]'>
                    <div>
                      <Link href={ `/dashboard/products/${ product._id }` }>
                        <span className='hover:underline'>
                          { product.title }
                        </span>
                      </Link>
                    </div>
                  </th>
                  <th className='border-t h-[57px] font-normal text-xs whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                    { 
                      product.status === 'ACTIVE' 
                        ? <div className='w-16 py-[0.2rem] px-[0.1rem] bg-green-200 text-green-900 flex justify-center items-center rounded-xl'>Active</div>
                        : <div className='w-16 py-[0.2rem] px-[0.1rem] bg-sky-200 text-sky-800 flex justify-center items-center rounded-xl'>Draft</div>
                    }
                  </th>
                  <th className='border-t h-[57px] font-normal text-sm text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                    <div>
                      { product.inventory } in stock 
                    </div>
                  </th>
                  <th className='border-t h-[57px] font-normal text-sm text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                    <div>
                      { product.price } $
                    </div>
                  </th>
                  <th className='border-t h-[57px] font-normal text-sm text-gray-500 whitespace-nowrap text-left py-[0.5rem] px-[1rem]'>
                    <div>
                      { product.discountPrice } $
                    </div>
                  </th>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
