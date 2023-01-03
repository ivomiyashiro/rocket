import { ChangeEvent, useContext } from 'react';
import { ProductFormContext } from 'context';
import { Input, DashboardCard } from 'components/ui';

export const Organization = () => {

  const { 
    vendor, 
    category, 
    handleCategoryValue, 
    handleVendorValue 
  } = useContext(ProductFormContext);

  return (
    <DashboardCard className='p-5' title='Product organization'>
      <Input 
        type='text' 
        label='Product Category'
        inputValue={ category.value }
        error={ category.error }
        onChange={ (e: ChangeEvent) => handleCategoryValue({ e }) }
      />
      <Input 
        type='text' 
        label='Vendor'
        inputValue={ vendor.value }
        error={ vendor.error }
        onChange={ (e: ChangeEvent) => handleVendorValue({ e }) }
      />
    </DashboardCard>
  );
};
