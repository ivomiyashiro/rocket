import { Dispatch, SetStateAction } from 'react';
import { DashboardCard } from 'components/ui';
import { OptionsForm } from './components';

interface Props {
  withOptions: boolean;
  options: { id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[];
  handleWithOptions: Dispatch<SetStateAction<boolean>>;
  handleOptions:Dispatch<SetStateAction<{ id: number; name: string; values: {id: number; value: string}[]; editing: boolean; }[]>>
}

export const Options = ({ withOptions, options, handleOptions, handleWithOptions }: Props) => {
  return (
    <DashboardCard title='Options' className={ `p-5 ${withOptions && 'pb-0'}` }>
      <div className={ `flex items-center gap-2 ${withOptions && 'pb-5 border-b'}` }>
        <input 
          type="checkbox" 
          id='with-options' 
          className='w-4 h-4'
          checked={ withOptions }
          onChange={ () =>  handleWithOptions(prev => !prev) }
        />
        <label htmlFor="with-options" className='text-sm text-gray-600 cursor-pointer'>This product has options, like size or color.</label>
      </div>
      { withOptions && <OptionsForm options={ options } handleOptions={ handleOptions } handleWithOptions={ handleWithOptions } /> }
    </DashboardCard>
  );
};
