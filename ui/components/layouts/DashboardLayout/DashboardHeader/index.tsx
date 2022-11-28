import { useContext, useState } from 'react';
import { AuthContext } from 'context';
import { BellIcon, UserRoundedIcon } from 'components/icons';
import { NotificationMenu, UserMenu } from './components';

export const DashboardHeader = ({ title }: { title: string }) => {

  const { user, signout } = useContext(AuthContext);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isNotificationsMenuOpen, setNotificationsMenuOpen] = useState(false);

  return (
    <header className='my-2 h-dashboard-header px-6 flex items-center justify-between bg-white shadow-card rounded-md outline outline-1 outline-divider'>
      <div>
        <h1 className='font-bold text-3xl text-gray-600'>{ title }</h1>
      </div>
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <button className={ `h-10 px-2 rounded-md text-gray-600 ${ isNotificationsMenuOpen ? 'bg-gray-100 text-indigo-600' : 'hover:bg-gray-100'}` } onClick={ () => setNotificationsMenuOpen(prev => !prev) }>
            <BellIcon size='24px' color='' />
          </button>
          <NotificationMenu isOpen={ isNotificationsMenuOpen } handleOpen={ setNotificationsMenuOpen } />
        </div>
        <div className='relative'>
          <button className={ `h-10 px-2 rounded-md text-gray-600 flex items-center gap-1 ${ isUserMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-100'}` } onClick={ () => setUserMenuOpen(prev => !prev) }>
            <UserRoundedIcon size='28px' color='' />
            <h3 className='text-sm font-medium'>{ user?.name }</h3>
          </button>
          <UserMenu isOpen={ isUserMenuOpen } handleOpen={ setUserMenuOpen } signout={ signout } />
        </div>
      </div>
    </header>
  );
};
