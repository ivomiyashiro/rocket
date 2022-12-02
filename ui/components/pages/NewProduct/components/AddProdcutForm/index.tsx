import { useNewProduct } from '../../useNewProduct';
import { TitleAndDescription, Media } from '../';


export const AddProductForm = () => {

  const { 
    titleValue,
    descriptionValue,
    mediaValue,
    setTitleValue,
    setDescriptionValue,
    setMediaValue,
    handleSubmit
  } = useNewProduct();

  return (
    <form onSubmit={ handleSubmit }>
      <div className='flex flex-wrap items-start mt-5 gap-6'>
        <div className='flex-dashboard-add-product-col-1 min-w-dashboard-add-product-col-1 flex flex-col gap-5'>
          <TitleAndDescription 
            titleValue={ titleValue }
            descriptionValue={ descriptionValue }
            handleTitleValue={ setTitleValue }
            handleDescriptionValue={ setDescriptionValue }
          />
          <Media productMedia={ mediaValue } handleProductMedia={ setMediaValue } />
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
