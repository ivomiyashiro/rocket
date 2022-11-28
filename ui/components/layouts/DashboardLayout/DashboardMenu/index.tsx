import Link from 'next/link';
import { RocketIcon, HomeIcon, OrdersIcon, TagIcon, UserIcon, SettingsIcon } from 'components/icons';
import { Button } from 'components/ui/Button';
import { MenuLink } from './components';

export const DashboardMenu = () => {
  return ( 
    <aside className='h-screen'>
      <div className='pt-2 pl-2 pb-2 h-full'>
        <div className='h-full flex flex-col gap-12 bg-white shadow-card rounded-md outline outline-1 outline-divider'>
          <div className='h-dashboard-header px-4 flex items-center'>
            <Link href='/dashboard'>
              <div className='flex items-center gap-2 text-indigo-600'>
                <RocketIcon size="40px" color="" />
              </div>
            </Link>
          </div>
          <ul className='flex flex-col gap-4 pr-3'>
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
