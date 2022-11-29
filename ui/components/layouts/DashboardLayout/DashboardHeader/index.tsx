import { useContext, useState } from 'react';
import Link from 'next/link';
import { AuthContext } from 'context';
import { BarsIcon, BellIcon, RocketIcon, SearchIcon, UserRoundedIcon } from 'components/icons';
import { UserMenu, Searchbar, AlertsMenu } from './components';

export const DashboardHeader = () => {

  const { user, signout } = useContext(AuthContext);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isNotificationsMenuOpen, setNotificationsMenuOpen] = useState(false);
  const [isSearchbarOpen, setSearchbarOpen] = useState(false);
  const [isAsideMenuOpen, setAsideMenuOpen] = useState(false);

  return (
    <header className='h-dashboard-header flex items-center justify-between w-full px-4 fixed top-0 bg-white shadow-md'>
      <div className='hidden md:block min-w-dashboard-header-logo '>
        <Link href='/dashboard'>
          <div className='text-indigo-600 flex items-center gap-1'>
            <RocketIcon size='35px' />
            <p className='text-2xl italic font-extrabold text-gray-700'>Rocket</p>
          </div>
        </Link>
      </div>
      <div className='md:hidden'>
        <button className='h-10 px-2 rounded-md text-gray-600 hover:bg-gray-100' onClick={ () => setAsideMenuOpen(prev => !prev) }>
          <BarsIcon size='24px' />
        </button>
      </div>
      <div className='w-full max-w-xl px-8'>
        <button className='flex p-2 gap-2 items-center bg-gray-100 rounded-md w-full text-gray-500 hover:text-gray-700 border border-gray-200 hover:border-gray-300' onClick={ () => setSearchbarOpen(prev => !prev) }>
          <SearchIcon size='21px' />
          <p className='text-sm'>Search</p>
        </button>
        <Searchbar isOpen={ isSearchbarOpen } handleOpen={ setSearchbarOpen } />
      </div>
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <button className={ `h-10 px-2 rounded-md text-gray-600 ${ isNotificationsMenuOpen ? 'bg-gray-100 text-indigo-600' : 'hover:bg-gray-100'}` } onClick={ () => setNotificationsMenuOpen(prev => !prev) }>
            <BellIcon size='22px' />
          </button>
          <AlertsMenu isOpen={ isNotificationsMenuOpen } handleOpen={ setNotificationsMenuOpen } />
        </div>
        <div className='relative'>
          <button className={ `h-10 px-2 rounded-md text-gray-600 flex items-center gap-2 ${ isUserMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-100'}` } onClick={ () => setUserMenuOpen(prev => !prev) }>
            <UserRoundedIcon size='26px' />
            <h3 className='hidden md:block text-sm font-medium whitespace-nowrap'>{ user?.name }</h3>
          </button>
          <UserMenu isOpen={ isUserMenuOpen } handleOpen={ setUserMenuOpen } signout={ signout } />
        </div>
      </div>
    </header>
  );
};
