import { DashboardCard, Select } from 'components/ui';
import { useId } from 'react';

export const Status = () => {

  const id = useId();

  return (
    <DashboardCard className='p-5' title='Product status'>
      <Select
        id={ id }
        options={ ['Active', 'Draft'] }
      />
    </DashboardCard>
  );
};
