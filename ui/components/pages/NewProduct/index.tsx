import { useRouter } from 'next/router';
import { ArrowLeftIcon } from 'components/icons';
import { AddProductForm } from './components';

export const NewProductPage = () => {

  const router = useRouter();

  return (
    <div>
      <div className='flex items-center gap-4'>
        <button className='text-gray-500 w-9 h-9 outline outline-1 outline-gray-300 rounded-md flex items-center justify-center' onClick={ () => router.push('/dashboard/products') } >
          <ArrowLeftIcon size="22px" />
        </button>
        <h2 className='text-gray-700 font-semibold text-xl'>Add Product</h2>
      </div>
      <AddProductForm />
    </div>
  );
};
