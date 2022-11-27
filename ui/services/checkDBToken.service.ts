import axios, { AxiosError } from 'axios';


export const checkDBToken = async ({ token }: { token: string }) => {
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string + '/auth/renew', {
        token
      }, { withCredentials: true }
    );

    return data;
    
  } catch(error) {
    const { response } = error as AxiosError; 
    return response?.data;
  }
};
