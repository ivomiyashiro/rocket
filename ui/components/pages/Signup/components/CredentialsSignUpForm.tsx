import { Button, Input, Spinner } from 'components/ui';
import { useSignUpCredentials } from '../useSignUpCredentials';

export const CredentialsSignInForm = () => {

  const {
    fullNameInput,
    emailInput, 
    passwordInput, 
    isLoading,
    setFullNameInput,
    setEmailInput, 
    setPasswordInput, 
    handleSubmit 
  } = useSignUpCredentials();

  return (
    <form className='my-5' onSubmit={ handleSubmit }> 
      <div>
        <Input 
          type='text'
          placeholder='Enter your full name...'
          label='Full Name'
          name='name'
          id='name'
          inputValue={ fullNameInput.value }
          error={ fullNameInput.error }
          onChange={ setFullNameInput }
        />
        <Input 
          type='email'
          placeholder='Enter your email...'
          label='Email'
          name='email'
          id='email'
          inputValue={ emailInput.value }
          error={ emailInput.error }
          onChange={ setEmailInput }
        />
        <Input 
          type='password'
          placeholder='Enter your password...'
          label='Password'
          name='password'
          id='password'
          inputValue={ passwordInput.value }
          error={ passwordInput.error }
          onChange={ setPasswordInput }
        />
        <div className='mt-6'>
          <Button type='button' bgColor="indigo-600" textColor="white" className='w-full'>
            {
              isLoading
                ? <Spinner size={ 12 } color='white' />
                : 'Sign up'
            }
          </Button>
        </div>
      </div>
    </form>
  );
};
