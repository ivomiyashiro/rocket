interface Props {
  sort: 'A - Z' | 'Z - A' | 'Low inventory' | 'High inventory' | 'Lowest Price' | 'Highest Price';
}

export const formatSortParams = ({ sort }: Props) => {
  let orderBy = '';
  let sortBy = '';

  if (sort === 'A - Z' || sort === 'Z - A') {
    sortBy = 'title';
  }

  if (sort === 'A - Z') {
    orderBy = 'asc';
  } else if (sort === 'Z - A') {
    orderBy = 'desc';
  }

  if (sort === 'High inventory' || sort === 'Low inventory') {
    sortBy = 'inventory';
  }

  if (sort === 'High inventory') {
    orderBy = 'asc';
  } else if (sort === 'Low inventory') {
    orderBy = 'desc';
  }

  if (sort === 'Highest Price' || sort === 'Lowest Price') {
    sortBy = 'price';
  }

  if (sort === 'Highest Price') {
    orderBy = 'asc';
  } else if (sort === 'Lowest Price') {
    orderBy = 'desc';
  }

  return { orderBy, sortBy };
};
