import { useContext } from 'react';
import { ProductFormContext } from 'context';
import { Input, DashboardCard } from 'components/ui';

export const Inventory = () => {

  const { 
    sku, 
    barcode, 
    inventory,
    handleProductSKU,
    handleProductBarcode,
    handleProductQuantityChange,
    handleProductQuantityDecrese,
    handleProductQuantityIncrese
  } = useContext(ProductFormContext);

  return (
    <DashboardCard title='Inventory' className='p-5'>
      <div className='flex gap-5'>
        <Input
          type='text' 
          label='SKU (Stock Keeping Unit)'
          inputValue={ sku }
          error=''
          onChange={ (e) => handleProductSKU({ e }) }
        />
        <Input
          type='text'
          label='Barcode (ISBN, UPC, etc.)'
          inputValue={ barcode }
          error=''
          onChange={ (e) => handleProductBarcode({ e }) }
        />
      </div>
      <div>
        <Input
          type='number'
          label='Quantity'
          placeholder='0'
          error=''
          inputValue={ inventory }
          withError={ false }
          withSpinner={ true }
          onChange={ (e) => handleProductQuantityChange({ e }) }
          handleIncreaseQuantity={ handleProductQuantityIncrese }
          handleDecreaseQuantity={ handleProductQuantityDecrese }
        />  
      </div>
    </DashboardCard>
  );
};
