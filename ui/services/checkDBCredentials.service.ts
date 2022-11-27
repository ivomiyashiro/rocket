import axios, { AxiosError } from 'axios';

interface Props { email: string; password: string }

export const checkDBCredentials = async ({ email, password }: Props) => {
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string + '/auth/signin', {
        email: email,
        password: password
      }, { withCredentials: true }
    );

    return data;
    
  } catch(error) {
    const { response } = error as AxiosError; 
    return response?.data;
  }
};
