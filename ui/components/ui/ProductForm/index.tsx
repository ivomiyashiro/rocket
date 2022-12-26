import { useContext } from 'react';
import { ProductFormContext } from 'context';
import { TitleAndDescription, Media, Pricing, Options, Variants, Status, Organization, Inventory } from './components';

export const ProductForm = () => {

  const { options, handleSubmit } = useContext(ProductFormContext);    

  return (
    <form onSubmit={ handleSubmit }>
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
        <div className='flex-dashboard-add-product-col-1 min-w-dashboard-add-product-col-1'>
          <button>Create</button>
        </div>
      </div>
    </form>
  );
};
