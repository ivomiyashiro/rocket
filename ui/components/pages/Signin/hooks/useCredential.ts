import { FormEvent, useContext, useState } from 'react';
import { checkValidEmail } from 'helpers';
import { AuthContext } from 'context';

export const useCredential = () => {

  const { signin } = useContext(AuthContext);

  const [isLoading, setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState({ value: '', error: '' });
  const [passwordInput, setPasswordInput] = useState({ value: '',error: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (emailInput.value.length === 0 && passwordInput.value.length === 0) {
        setEmailInput(prev => ({
          ...prev,
          error: 'Email is required.'
        }));

        return setPasswordInput(prev => ({
          ...prev,
          error: 'Password is required.'
        }));
      }

      if (!checkValidEmail({ email: emailInput.value })) {
        return setEmailInput(prev => ({
          ...prev,
          error: 'Email is not valid.'
        }));
      }

      await signin({ email: emailInput.value, password: passwordInput.value });

    } catch (error: any) {
      setEmailInput(prev => ({
        ...prev,
        error
      }));

      setPasswordInput(prev => ({
        ...prev,
        error
      }));

    } finally { setLoading(false); }
  };

  return {
    emailInput,
    passwordInput,
    isLoading,
    setEmailInput,
    setPasswordInput,
    handleSubmit
  };
};
