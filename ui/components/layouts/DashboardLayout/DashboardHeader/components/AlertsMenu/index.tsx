import { Dispatch, SetStateAction } from 'react';
import { CheckCircleIcon } from 'components/icons';
import { Menu } from 'components/ui';

interface Props {
  isOpen: boolean,
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const AlertsMenu = ({ isOpen, handleOpen }: Props) => {
  return (
    <Menu isOpen={ isOpen } handleOpen={ handleOpen }>
      <menu className={ `fixed right-2 min-w-dashboard-alerts-menu mt-4 z-20 rounded-md shadow-popover bg-white overflow-hidden ${ isOpen ? 'h-auto outline outline-1 outline-divider' : 'h-0' }` }>
        <div className='p-4'>
          <div className='flex justify-between'>
            <h3 className='font-medium'>Alerts</h3>
            <button className='text-gray-400'>
              <CheckCircleIcon size='20px' color=''/>
            </button>
          </div>
          <div className='w-full h-20 bg-gray-100 mt-6 rounded-md p-2 flex items-center justify-center'>
            <p className='text-center text-gray-500 text-sm p-4'>Alerts about your store and account will show here</p>
          </div>
        </div>
      </menu>
    </Menu>
  );
};
