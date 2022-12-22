import { useContext } from 'react';
import { ProductFormContext } from 'context';
import { TitleAndDescription, Media, Pricing, Options, Variants } from './components';

export const ProductForm = () => {

  const { options, handleSubmit } = useContext(ProductFormContext);    

  return (
    <form onSubmit={ handleSubmit }>
      <div className='flex flex-wrap items-start mt-5 gap-6'>
        <div className='flex-dashboard-add-product-col-1 min-w-dashboard-add-product-col-1 flex flex-col gap-5'>
          <TitleAndDescription />
          <Options />
          {
            options.length > 0
              ? (
                <Variants />
              )
              : (
                'hola'
                // <Pricing
                //   priceValue={ priceValue }
                //   discountPriceValue={ discountPriceValue }
                //   handlePriceValue={ setPriceValue }
                //   handleDiscountPriceValue={ setDiscountPriceValue }
                // />
              )
          }
          {/* <Media productMedia={ mediaValue } handleProductMedia={ setMediaValue } /> */}
        </div>
        <div className='flex-dashboard-add-product-col-2 min-w-0'>

        </div>
        <div className='flex-dashboard-add-product-col-1 min-w-dashboard-add-product-col-1'>
          <button>Create</button>
        </div>
      </div>
    </form>
  );
};
