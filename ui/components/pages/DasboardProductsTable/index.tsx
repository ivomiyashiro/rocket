import { useEffect, useState } from 'react';

import { TSort } from 'interfaces';

import { useDebounce, useProducts } from 'hooks';

import { Button, DashboardCard, Tab, Pagination } from 'components/ui';
import { NoProductsCreated, ProductsTable, ProductsTableHeader, ProductsTableSkeleton } from './components';

export const DashboardProductsTable = () => {

  const [activeTab, setActiveTab] = useState<'All' | 'Active' | 'Draft'>('All');
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState<TSort>('A - Z');
  const [page, setPage] = useState(1);
  const [filters, setFilter] = useState({});
  const [search, setSearch] = useState('');
  const { debouncedValue } = useDebounce({ value: search, delay: 500 });
  const { products, pages, isLoading, isFirstLoadLoading, handleProducts } = useProducts({ limit, sort, page, filters, search: debouncedValue });

  useEffect(() => {
    if (activeTab === 'All') {
      setFilter({});
    } else if (activeTab === 'Active') {
      setFilter({ status: 'ACTIVE' });
    } else {
      setFilter({ status: 'DRAFT' }); 
    }
  }, [activeTab]);

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
            isFirstLoadLoading
              ? <ProductsTableSkeleton />
              : (
                products.length === 0 && Object.keys(filters).length === 0 && debouncedValue === ''
                  ? <NoProductsCreated />
                  : (
                    <Tab
                      tabs={ ['All', 'Active', 'Draft'] }
                      activeTab={ activeTab } 
                      handleActiveTab={ setActiveTab }
                    >
                      <ProductsTableHeader
                        searchValue={ search }
                        handleSearch={ setSearch }
                        handleLimit={ setLimit } 
                        handleSort={ setSort } 
                      />
                      <ProductsTable 
                        products={ products }
                        activeTab={ activeTab }
                        isLoading={ isLoading } 
                        searchValue={ debouncedValue }
                        handleProducts={ handleProducts } 
                      />
                      {
                        pages > 1
                        &&
                        <Pagination 
                          currentPage={ page }
                          totalPages={ pages }
                          handlePage={ setPage } 
                        />
                      }
                    </Tab>
                  )
              )
          }
        </DashboardCard>
      </div>
    </div>
  );
};
