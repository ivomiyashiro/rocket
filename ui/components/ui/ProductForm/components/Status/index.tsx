import { useContext, useId } from 'react';
import { ProductFormContext } from 'context';
import { DashboardCard, Select } from 'components/ui';

export const Status = () => {

  const id = useId();
  const { toggleProductStatus } = useContext(ProductFormContext);

  return (
    <DashboardCard className='p-5' title='Product status'>
      <div className='h-[38px]'>
        <Select
          id={ id }
          options={ ['Active', 'Draft'] }
          onChange={ toggleProductStatus }
        />
      </div>
    </DashboardCard>
  );
};
