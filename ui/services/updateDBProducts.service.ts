import axios, { AxiosError } from 'axios';

interface Props {
  productsIDs: string[];
  data: any
}

export const updateDBProducts = async ({ productsIDs, data }: Props) => {
  try {
    const { data: ReqData } = await axios.put(
      process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string + `/products/${ encodeURIComponent(JSON.stringify(productsIDs)) }`,
      { ...data },
      { withCredentials: true }
    );

    return ReqData;
    
  } catch(error) {
    const { response } = error as AxiosError; 
    return response?.data;
  }  
};
