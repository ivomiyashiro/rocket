import { AuthState } from './';
import { IUser } from 'interfaces';

type AuthActionType = 
   | { type: '[AUTH] - Signin', payload: IUser }
   | { type: '[AUTH] - Signout' }
   | { type: '[AUTH] - Start Loading' }
   | { type: '[AUTH] - Finish Loading' }

export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {

  switch (action.type) {
  case '[AUTH] - Signin':
    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      user: action.payload
    };

  case '[AUTH] - Signout':
    return {
      ...state,
      isLoggedIn: false,
      user: undefined,
    };
  
  case '[AUTH] - Start Loading':
    return {
      ...state,
      isLoading: true
    };

  case '[AUTH] - Finish Loading':
    return {
      ...state,
      isLoading: false
    };

  default:
    return state;
  }
};
