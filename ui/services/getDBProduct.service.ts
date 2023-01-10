import axios, { AxiosError } from 'axios';

interface Props { id: string }

export const getDBProduct = async ({ id }: Props) => {
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string + `/products/${ id }`,
    );

    return data;
    
  } catch(error) {
    const { response } = error as AxiosError; 
    return response?.data;
  }  
};
