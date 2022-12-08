import { useContext } from 'react';
import { ProductFormContext } from 'context';
import { TitleAndDescription, Media, Pricing, Options, Variants } from './components';

export const ProductForm = () => {

  const { handleSubmit } = useContext(ProductFormContext);    

  return (
    <form onSubmit={ handleSubmit }>
      <div className='flex flex-wrap items-start mt-5 gap-6'>
        <div className='flex-dashboard-add-product-col-1 min-w-dashboard-add-product-col-1 flex flex-col gap-5'>
          {/* <TitleAndDescription 
            titleValue={ titleValue }
            descriptionValue={ descriptionValue }
            handleTitleValue={ setTitleValue }
            handleDescriptionValue={ setDescriptionValue }
          />
          <Media productMedia={ mediaValue } handleProductMedia={ setMediaValue } />
          <Options
            withOptions={ withOptions } 
            options={ options }
            handleWithOptions={ setWithOptions } 
            handleOptions={ setOptions }
          />
          <Variants 
            options={ options }
          />
          {
            !withOptions
            &&
            <>
              <Pricing
                priceValue={ priceValue }
                discountPriceValue={ discountPriceValue }
                handlePriceValue={ setPriceValue }
                handleDiscountPriceValue={ setDiscountPriceValue }
              />
            </>
          } */}
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
