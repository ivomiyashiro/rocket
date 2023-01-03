import axios, { AxiosError } from 'axios';
import { IProduct } from 'interfaces';

interface Props { data: IProduct }

export const createDBProduct = async ({ data }: Props) => {
  try {
    const { data: respData } = await axios.post(
      process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string + '/products', {
        ...data
      }, {
        withCredentials: true
      }
    );

    return respData;
    
  } catch(error) {
    const { response } = error as AxiosError; 
    return response?.data;
  }
};
