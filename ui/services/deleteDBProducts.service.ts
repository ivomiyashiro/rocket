import axios, { AxiosError } from 'axios';

interface Props {
  productsIDs: string[];
}

export const deleteDBProducts = async ({ productsIDs }: Props) => {
  try {
    const { data } = await axios.delete(
      process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string + `/products/${ encodeURIComponent(JSON.stringify(productsIDs)) }`,
      { withCredentials: true }
    );

    return data;
    
  } catch(error) {
    const { response } = error as AxiosError; 
    return response?.data;
  }  
};
