import { useRouter } from 'next/router';
import { ArrowLeftIcon } from 'components/icons';
import { Input } from 'components/ui';
import { FormCard } from './components';

export const NewProductPage = () => {

  const router = useRouter();

  return (
    <div>
      <div className='flex items-center gap-4'>
        <button className='text-gray-500 w-9 h-9 outline outline-1 outline-gray-300 rounded-md flex items-center justify-center' onClick={ () => router.push('/dashboard/products') } >
          <ArrowLeftIcon size="24px" color='' />
        </button>
        <h2 className='text-gray-700 font-semibold text-xl'>Add Product</h2>
      </div>
      <form action="">
        <div className='grid grid-cols-dashboard-create-product w-full mt-5 gap-6'>
          <div className=''>
            <FormCard>
              <Input type='text' label='Title' />
              <Input type='text' label='Description' />
            </FormCard>
          </div>
          <div className=''>
            <div className='p-5 shadow-card'>
              hola
            </div>
          </div>
        </div>
        <div className=''>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};
