import { FormEvent, useContext, useState } from 'react';
import { checkValidEmail, checkValidPassword } from 'helpers';
import { AuthContext } from 'context';

export const useSignUpCredentials = () => {

  const { signup } = useContext(AuthContext);

  const [isLoading, setLoading] = useState(false);
  const [fullNameInput, setFullNameInput] = useState({ value: '', error: '' });
  const [emailInput, setEmailInput] = useState({ value: '', error: '' });
  const [passwordInput, setPasswordInput] = useState({ value: '',error: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formError = false;
    setLoading(true);

    try {
      if (fullNameInput.value.length === 0) {
        setFullNameInput(prev => ({
          ...prev,
          error: 'Name is required.'
        }));
      } else {
        setFullNameInput(prev => ({
          ...prev,
          error: ''
        }));
      }

      if (emailInput.value.length === 0){
        setEmailInput(prev => ({
          ...prev,
          error: 'Email is required.'
        }));
      } else if (!checkValidEmail({ email: emailInput.value })) {
        setEmailInput(prev => ({
          ...prev,
          error: 'Email is not valid.'
        }));
      } else {
        setEmailInput(prev => ({
          ...prev,
          error: ''
        }));
      }

      if (passwordInput.value.length === 0){
        setPasswordInput(prev => ({
          ...prev,
          error: 'Password is required.'
        }));
      } else if (!checkValidPassword({ password: passwordInput.value })) {
        setPasswordInput(prev => ({
          ...prev,
          error: 'Password length must be greater than 6 charactes.'
        }));
      } else {
        setPasswordInput(prev => ({
          ...prev,
          error: ''
        }));
      }

      const inputErrorsArr = [fullNameInput.error, emailInput.error, passwordInput.error];

      for (let i = 0; i < inputErrorsArr.length; i ++) {
        if (!!inputErrorsArr[i]) {
          formError = true;
        }
      }

      if (formError) return;

      await signup({ name: fullNameInput.value, email: emailInput.value, password: passwordInput.value });

    } catch (error: any) {

      if (error === 'Email is already in use.') {
        return setEmailInput(prev => ({
          ...prev,
          error
        }));
      }

      setFullNameInput(prev => ({
        ...prev,
        error
      }));

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
    fullNameInput,
    emailInput,
    passwordInput,
    isLoading,
    setFullNameInput,
    setEmailInput,
    setPasswordInput,
    handleSubmit
  };
};
