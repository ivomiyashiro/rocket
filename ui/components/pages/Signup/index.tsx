import Link from 'next/link';
import { RocketIcon } from 'components/icons';
import { CredentialsSignInForm } from './components';
import { GoogleProvider } from 'components/ui';

export const SignupPage = () => {
  return (
    <div className='flex bg-white shadow-2xl h-full w-full sm:max-h-signup-window sm:max-w-signup-window sm:rounded-2xl'>
      <div className='px-6 py-12 w-full'>
        <Link href='/'>
          <div className='inline-flex items-center gap-2'>
            <RocketIcon size='32' color='black' />
            <p className='text-3xl font-bold'>Sign up</p>
          </div>
        </Link>
        <CredentialsSignInForm />
        <div className='relative w-full text-center flex items-center justify-center my-10'>
          <div className='w-full h-px bg-gray-300'/>
          <span className='absolute bg-white p-3 text-gray-400 text-sm'>or</span>
        </div>
        <GoogleProvider type='Sign up' />
      </div>
    </div>
  );
};

