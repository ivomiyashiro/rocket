import { Button, Input } from 'components/ui';
import { useSignInCredential } from '../hooks';

export const CredentialsSignInForm = () => {

  const { 
    emailInput, 
    passwordInput, 
    isLoading,
    setEmailInput, 
    setPasswordInput, 
    handleSubmit 
  } = useSignInCredential();

  return (
    <form className='my-5' onSubmit={ handleSubmit }> 
      <div>
        <Input 
          type='email'
          placeholder='Enter your email...'
          label='Email'
          name='email'
          id='email'
          inputValue={ emailInput.value }
          error={ emailInput.error }
          handleInputValue={ setEmailInput }
        />
        <Input 
          type='password'
          placeholder='Enter your password...'
          label='Password'
          name='password'
          id='password'
          inputValue={ passwordInput.value }
          error={ passwordInput.error }
          handleInputValue={ setPasswordInput }
        />
        <div className='flex items-center gap-1 mt-2 mb-6'>
          <input type="checkbox" name="remember-me" id='remember-me'/>
          <label className='text-sm' htmlFor="remember-me">Remember me</label>
        </div>
        <Button type='button' bgColor="bg-indigo-600" textColor="text-white">
          {
            isLoading
              ? 'Cargando...'
              : 'Sign in'
          }
        </Button>
      </div>
    </form>
  );
};
