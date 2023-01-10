import { useContext } from 'react';
import { useRouter } from 'next/router';
import { IProduct } from 'interfaces';
import { ProductFormContext } from 'context';
import { deleteDBProducts } from 'services';
import { Button, MainLogo, Spinner } from 'components/ui';
import { TitleAndDescription, Media, Pricing, Options, Variants, Status, Organization, Inventory } from './components';

interface Props { product?: IProduct; }

export const ProductForm = ({ product }: Props) => {

  const { isFormValid, options, isLoading, handleSubmit } = useContext(ProductFormContext);
  const disabled = (isFormValid && !isLoading) ? false : true;
  const router = useRouter();

  const handleDeleteProduct = () => {
    deleteDBProducts({ productsIDs: [product?._id as string] });
    router.push('/dashboard/products');
  };

  return (
    <form onSubmit={ handleSubmit }>
      {
        !!!product
        &&
        (
          <div className='fixed top-0 w-full z-40 left-0 h-dashboard-header flex items-center justify-between px-4 bg-[#202123]'>
            <div>
              <MainLogo iconColor='#939EAA' textColor='#939EAA' />
            </div>
            <div className='flex gap-3'>
              <Button 
                type='link' 
                href='/dashboard/products' 
                bgColor='transparent' 
                textColor='gray-300' 
                className='w-[85px] hover:bg-[#54575b]'
                outline
              >
                <p className='text-sm'> Discard </p>
              </Button>
              <Button 
                type='submit' 
                bgColor='indigo-600' 
                textColor='white' 
                className={ `flex items-center justify-center disabled:bg-gray-200 disabled:text-gray-500 border w-[63px] h-[38px] ${ disabled ? 'border-gray-100' : 'border-indigo-600' }` }
                disabled={ disabled }
              >
                <div className='text-sm'> 
                  {
                    isLoading
                      ? <Spinner color='fill-gray-400' size={ 4 } />
                      : <p>Save</p>
                  }
                </div>
              </Button>
            </div>
          </div>
        )
      }
      <div className='flex flex-wrap items-start mt-5 gap-5'>
        <div className='flex-dashboard-add-product-col-1 min-w-dashboard-add-product-col-1 flex flex-col gap-5'>
          <TitleAndDescription />
          <Options />
          {
            options.length > 0
              ? (
                <>
                  <Variants />
                  <Media />
                </>
              )
              : (
                <>
                  <Media />
                  <Pricing />
                  <Inventory />
                </>
              )
          }
        </div>
        <div className='flex-dashboard-add-product-col-2 min-w-0 flex flex-col gap-5'>
          <Status />
          <Organization />
        </div>
        <div className='flex-dashboard-add-product-col-1 min-w-dashboard-add-product-col-1 flex justify-end border-t py-5'>
          <div className='flex gap-2'>
            {
              !!product
              &&
              <Button 
                type='button' 
                bgColor='transparent' 
                textColor='red-500' 
                className={ `flex items-center justify-center disabled:bg-gray-200 disabled:text-gray-500 border w-[140px] h-[38px] ${ disabled ? 'border-gray-100' : 'border-red-500 hover:bg-red-50' }` }
                disabled={ disabled }
                onClick={ handleDeleteProduct }
              >
                <div className='text-sm'> 
                  {
                    isLoading
                      ? <Spinner color='fill-gray-400' size={ 4 } />
                      : <p>Delete product</p>
                  }
                </div>
              </Button>
            }
            <Button 
              type='submit' 
              bgColor='indigo-600' 
              textColor='white' 
              className={ `flex items-center justify-center disabled:bg-gray-200 disabled:text-gray-500 border w-[63px] h-[38px] ${ disabled ? 'border-gray-100' : 'border-indigo-600' }` }
              disabled={ disabled }
            >
              <div className='text-sm'> 
                {
                  isLoading
                    ? <Spinner color='fill-gray-400' size={ 4 } />
                    : <p>Save</p>
                }
              </div>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
