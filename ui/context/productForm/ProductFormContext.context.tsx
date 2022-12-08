import { createContext, FormEvent } from 'react';
import { IProductForm } from './';

interface ContextProps extends IProductForm {

  // Methods
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}


export const ProductFormContext = createContext({} as ContextProps );
