import axios, { AxiosError } from 'axios';

interface Props {
  limit: number;
  orderBy: string;
  sortBy: string;
  filters: any;
  page: number;
  search: string;
}

export const getDBProducts = async ({ limit, orderBy, sortBy, page, filters, search }: Props) => {
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string + '/products', {
        params: {
          limit,
          orderBy,
          sortBy,
          page,
          filters: JSON.stringify(filters),
          search
        }
      },
    );

    return data;
    
  } catch(error) {
    const { response } = error as AxiosError; 
    return response?.data;
  }  
};
