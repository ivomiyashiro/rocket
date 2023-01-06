import { NoProductsIcon } from 'components/icons';
import { Button } from 'components/ui';

export const NoProductsMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center p-12'>
      <NoProductsIcon size='226' />
      <div className='text-center'>
        <h2 className='text-lg font-semibold'>First up: what are you selling?</h2>
        <p className='text-sm text-gray-500 my-3'>Before you open your store, first you need some products.</p>
      </div>
      <div className='mt-2 mb-12'>
        <Button type='link' href='/dashboard/products/new' textColor='white' bgColor='indigo-600' className='w-[155px]'>
          <span className='text-sm'>Add your products</span>
        </Button>
      </div>
    </div>
  );
};
