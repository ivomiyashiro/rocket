import { useEffect, useState } from 'react';
import { IProduct, TSort } from 'interfaces';
import { getDBProducts } from 'services';
import { formatSortParams } from 'helpers';

interface Props {
  limit: number;
  page: number;
  sort: TSort;
  filters: any;
}

export const useProducts = ({ limit, sort, page, filters }: Props) => {
  
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isFirstLoadLoading, setfirstLoadLoading] = useState(false);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const { orderBy, sortBy } = formatSortParams({ sort });

    if (firstLoad) {
      setfirstLoadLoading(true);
      getDBProducts({ limit, orderBy, sortBy, page, filters })
        .then(({ products, totalPages }) => {
          setProducts(products);
          setPages(totalPages);
        })
        .catch(error => console.log(error))
        .finally(() => { setfirstLoadLoading(false); setFirstLoad(false); } );
    } else {
      setLoading(true);
      getDBProducts({ limit, orderBy, sortBy, page, filters })
        .then(({ products, totalPages }) => {
          setProducts(products);
          setPages(totalPages);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false) );
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, sort, filters, page]);

  return {
    products,
    pages,
    isLoading,
    isFirstLoadLoading,
    handleProducts: setProducts
  };
};
