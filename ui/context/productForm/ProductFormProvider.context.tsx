import { useReducer, ReactNode, FormEvent } from 'react';

import { ProductFormContext, productFormReducer, PRODUCT_FORM_INIT_STATE } from '.';

export const ProductFormProvider = ({ children }: { children: ReactNode }) => {

  const [state, dispatch] = useReducer( productFormReducer, PRODUCT_FORM_INIT_STATE );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ProductFormContext.Provider value={ {
      ...state,

      // Methods
      handleSubmit
    } }>
      { children }
    </ProductFormContext.Provider>
  );
};
