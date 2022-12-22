import { useContext } from 'react';

import { ProductFormContext } from 'context';

import { DashboardCard } from 'components/ui';
import { OptionsForm } from './components';

export const Options = () => {

  const { options, handleToggleOptions } = useContext(ProductFormContext);
  const withOptions = options.length > 0;

  return (
    <DashboardCard title='Options' className={ `p-5 ${withOptions && 'pb-0'}` }>
      <div className={ `flex items-center gap-2 ${withOptions && 'pb-5 border-b'}` }>
        <input 
          type="checkbox"
          id='with-options'
          className='w-4 h-4'
          checked={ withOptions }
          onChange={ handleToggleOptions }
        />
        <label htmlFor="with-options" className='text-sm text-gray-600 cursor-pointer'> 
          This product has options, like size or color. 
        </label>
      </div>
      { withOptions && <OptionsForm /> }
    </DashboardCard>
  );
};
