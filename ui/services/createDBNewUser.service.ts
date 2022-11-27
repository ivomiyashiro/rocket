import axios, { AxiosError } from 'axios';

interface Props {
  name: string;
  email: string;
  password: string;
}

export const createDBNewUser = async ({ name, email, password }: Props) => {
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string + '/auth/signup', {
        name,
        email,
        password
      }, {
        withCredentials: true
      }
    );

    return data;
    
  } catch(error) {
    const { response } = error as AxiosError; 
    return response?.data;
  }
};
