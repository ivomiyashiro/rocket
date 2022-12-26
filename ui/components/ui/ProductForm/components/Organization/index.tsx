import { Input, DashboardCard } from 'components/ui';
import { ProductFormContext } from 'context';
import { useContext } from 'react';

export const Organization = () => {

  const { vendor, category, handleCategoryValue, handleVendorValue } = useContext(ProductFormContext);

  return (
    <DashboardCard className='p-5' title='Product organization'>
      <Input 
        type='text' 
        label='Product Category'
        inputValue={ category.value }
        error={ category.error }
        onChange={ (e) => handleCategoryValue({ e }) }
      />
      <Input 
        type='text' 
        label='Vendor'
        inputValue={ vendor.value }
        error={ vendor.error }
        onChange={ (e) => handleVendorValue({ e }) }
      />
    </DashboardCard>
  );
};
