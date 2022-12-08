import { IProductForm } from './';

type AuthActionType =
 | { type: '[AUTH] - Signin', payload: IProductForm }

export const productFormReducer = ( state: IProductForm, action: AuthActionType ): IProductForm => {

  switch (action.type) {

  default:
    return state;
  }
};
