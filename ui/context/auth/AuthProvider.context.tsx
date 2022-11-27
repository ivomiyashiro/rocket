import { useReducer, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import { IUser } from 'interfaces';
import { checkDBCredentials, checkDBToken } from 'services';

import { AuthContext, authReducer } from './';

export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoading: true,
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );
  const router = useRouter();

  // Check if token is valid and login user again
  useEffect(() => {
    if (!Cookies.get('token')) return;

    checkDBToken({ token: Cookies.get('token')! })
      .then(({ user }) => {
        dispatch({
          type: '[AUTH] - Signin',
          payload: user
        });
      })
      .catch(error => {
        console.log(error);
        Cookies.remove('token');
        dispatch({ type: '[AUTH] - Signout' });
      });
  }, []);


  const signin = async({ email, password }: { email: string, password: string }) => {
    try {
      const data = await checkDBCredentials({ email, password });
      if (!data.ok) throw data.msg;

      dispatch({
        type: '[AUTH] - Signin',
        payload: data.user!
      });

      const destination = router.query.p?.toString() || '/';
      router.replace(destination);

    } catch (error) {
      throw error;
    }
  };


  // const signup = async( name: string, email: string, password: string ): Promise<{error: boolean; message?: string}> => {
  //   try {
  //     const { customer, message } = await signUp(name, email, password);

  //     if (!!message) return { error: true, message };

  //     dispatch({
  //       type: '[AUTH] - Signin',
  //       payload: customer!
  //     });
      
  //     const destination = router.query.p?.toString() || '/';
  //     router.replace(destination);
  //     return { error: false };
  //   } catch(error) {
  //     console.log(error);
  //     return { error: true };
  //   }
  // };

  // const signout = () => {
  //   signOut();
  // };


  return (
    <AuthContext.Provider value={ {
      ...state,

      // Methods
      signin,
      // signup,
      // signout,
    } }>
      { children }
    </AuthContext.Provider>
  );
};
