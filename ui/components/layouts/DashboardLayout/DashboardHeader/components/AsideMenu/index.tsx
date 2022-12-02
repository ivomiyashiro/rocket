import { Dispatch, SetStateAction } from 'react';
import { HomeIcon, OrdersIcon, TagIcon, UserIcon, SettingsIcon, StoreIcon } from 'components/icons';
import { Button, MainLogo, MenuLink, Modal } from 'components/ui';

interface Props {
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>
}

export const AsideMenu = ({ isOpen, handleOpen }: Props) => {
  return (
    <Modal align='start' justify='start' isOpen={ isOpen } withBackground handleOpen={ handleOpen } >
      <aside className={ `h-screen bg-gray-50 ${ isOpen ? 'w-dashboard-mobile-aside-menu' : 'w-0' } overflow-hidden` }>
        <div className='h-full'>
          <div className='h-full flex flex-col gap-8 shadow-card outline outline-1 outline-divider'>
            <div className='h-dashboard-header flex items-center px-4 shadow-md bg-white'>
              <MainLogo href='/dashboard' />
            </div>
            <ul className='flex flex-col gap-2 pr-3'>
              <MenuLink href="/dashboard" icon={ <HomeIcon size="22px" /> }>
                Home
              </MenuLink>
              <MenuLink href="/dashboard/orders" icon={ <OrdersIcon size="22px" /> }>
                Orders
              </MenuLink>
              <MenuLink href="/dashboard/products" icon={ <TagIcon size="22px" /> }>
                Products
              </MenuLink>
              <MenuLink href="/dashboard/customers" icon={ <UserIcon size="22px" /> }>
                Customers
              </MenuLink>
              <MenuLink href="/dashboard/settings" icon={ <SettingsIcon size="22px" /> }>
                Settings
              </MenuLink>
            </ul>
            <div className='w-full'>
              <div className='flex items-center px-4 gap-4'>
                <p className='text-sm font-medium text-gray-500 whitespace-nowrap'>Sales channels</p>
                <span className='h-px w-full bg-gray-300 mt-px'/>
              </div>
              <ul className='mt-2'>
                <li>
                  <a href="/" target='_blank' className='flex items-center rounded-md gap-5 bg-transparent hover:bg-gray-100 text-gray-600'>
                    <div className='w-1 h-11 rounded-xl bg-transparent' />
                    <div className='flex items-center gap-2'>
                      <StoreIcon size='22px' />
                      <p className='text-sm font-medium'> Online Store </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-auto p-3 h-16'>
              <Button type='link' href='/dashboard/products/new' bgColor='bg-indigo-600' textColor='text-white'>
                <p className='text-sm'> Add product </p>
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </Modal>
  );
};
