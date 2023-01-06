import { useState } from 'react';

import { TSort } from 'interfaces';

import { useProducts } from 'hooks';

import { Button, DashboardCard, Tab } from 'components/ui';
import { NoProductsMessage, ProductsTable, ProductsTableHeader } from './components';

export const DashboardProductList = () => {

  const [activeTab, setActiveTab] = useState('All');
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState<TSort>('A - Z');
  const [filters, setFilter] = useState({});
  const { products } = useProducts({ limit, sort, filters });

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-gray-700 font-semibold text-xl'>Products</h2>
        {
          products.length !== 0
          &&
          <Button type='link' href='/dashboard/products/new' textColor='white' bgColor='indigo-600' className='w-[115px]'>
            <span className='text-sm'>Add product</span>
          </Button>
        }
      </div>
      <div className='mt-4'>
        <DashboardCard>
          {
            products.length !== 0
              ? (
                <Tab
                  tabs={ ['All', 'Active', 'Draft'] }
                  activeTab={ activeTab } 
                  handleActiveTab={ setActiveTab }
                >
                  <ProductsTableHeader handleLimit={ setLimit } handleSort={ setSort } />
                  <ProductsTable products={ products } />
                </Tab>
              )
              : <NoProductsMessage />
          }
        </DashboardCard>
      </div>
    </div>
  );
};
