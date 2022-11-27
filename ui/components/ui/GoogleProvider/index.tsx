import Image from 'next/image';
import { getGoogleOAuthURL } from 'helpers';

interface Props { type: 'Sign in' | 'Sign up' }

export const GoogleProvider = ({ type }: Props) => {
  return (
    <a href={ getGoogleOAuthURL() } className='flex items-center gap-3 w-full justify-center py-2 border border-gray-200 rounded-md'>
      <Image
        src="https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg" 
        alt="google-logo"
        width={ 25 }
        height={ 25 }
      />
      <p> { type } with Google </p>
    </a>
  );
};
