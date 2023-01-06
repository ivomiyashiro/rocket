import { useEffect, useState } from 'react';
import { IProduct } from 'interfaces';
import { getDBProducts } from 'services';
import { formatSortParams } from 'helpers';

interface Props {
  limit: number;
  sort: 'A - Z' | 'Z - A' | 'Low inventory' | 'High inventory' | 'Lowest Price' | 'Highest Price';
  filters: any;
}

export const useProducts = ({ limit, sort, filters }: Props) => {
  
  const [products, setProducts] = useState<IProduct[]>([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const { orderBy, sortBy } = formatSortParams({ sort });

    getDBProducts({ limit, orderBy, sortBy, filters })
      .then(({ products, totalPages }) => {
        setProducts(products);
        setPages(totalPages);
      })
      .catch(error => console.log(error));
  }, [limit, sort, filters]);

  return {
    products,
    pages
  };
};
