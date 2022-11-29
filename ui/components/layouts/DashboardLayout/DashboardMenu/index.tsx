import Link from 'next/link';
import { RocketIcon, HomeIcon, OrdersIcon, TagIcon, UserIcon, SettingsIcon } from 'components/icons';
import { Button } from 'components/ui/Button';
import { MenuLink } from './components';

export const DashboardMenu = () => {
  return ( 
    <aside className='hidden md:block h-screen'>
      <div className='h-full'>
        <div className='h-full flex flex-col gap-12 shadow-card rounded-md outline outline-1 outline-divider'>
          <ul className='flex flex-col gap-2 pr-3 mt-24'>
            <MenuLink href="/dashboard" icon={ <HomeIcon size="22px" color="" /> }>
              Home
            </MenuLink>
            <MenuLink href="/dashboard/orders" icon={ <OrdersIcon size="22px" color="" /> }>
              Orders
            </MenuLink>
            <MenuLink href="/dashboard/products" icon={ <TagIcon size="22px" color="" /> }>
              Products
            </MenuLink>
            <MenuLink href="/dashboard/customers" icon={ <UserIcon size="22px" color="" /> }>
              Customers
            </MenuLink>
            <MenuLink href="/dashboard/settings" icon={ <SettingsIcon size="22px" color="" /> }>
              Settings
            </MenuLink>
          </ul>
          <div className='mt-auto p-3 h-16'>
            <Button type='link' href='/dashboard/products/new' bgColor='bg-indigo-600' textColor='text-white'>
              <p className='text-sm'> Add product </p>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
