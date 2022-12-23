import { IProductForm, IProductFormMedia, IProductFormOption, IProductFormVariant } from './';

type AuthActionType =
 | { type: '[PRODUCT FORM] - Change title value', payload: { value: string } }
 | { type: '[PRODUCT FORM] - Change description value', payload: { value: string } }
 | { type: '[PRODUCT FORM] - Add default product option', payload: { option: IProductFormOption } }
 | { type: '[PRODUCT FORM] - Reset product options' }
 | { type: '[PRODUCT FORM] - Handle options', payload: { options: IProductFormOption[] } }
 | { type: '[PRODUCT FORM] - Handle variants', payload: { variants: IProductFormVariant[] } }
 | { type: '[PRODUCT FORM] - Handle images', payload: { images: IProductFormMedia[] }}

export const productFormReducer = ( state: IProductForm, action: AuthActionType ): IProductForm => {

  switch (action.type) {

  case '[PRODUCT FORM] - Change title value':
    return {
      ...state,
      title: {
        ...state.title,
        value: action.payload.value
      }
    };

  case '[PRODUCT FORM] - Change description value':
    return {
      ...state,
      description: {
        ...state.description,
        value: action.payload.value
      }
    };

  case '[PRODUCT FORM] - Add default product option':
    return {
      ...state,
      options: [
        ...state.options,
        action.payload.option
      ]
    };

  case '[PRODUCT FORM] - Reset product options':
    return {
      ...state,
      options: []
    };

  case '[PRODUCT FORM] - Handle options':
    return {
      ...state,
      options: [ ...action.payload.options ]
    };

  case '[PRODUCT FORM] - Handle variants':
    return {
      ...state,
      variants: [ ...action.payload.variants ]
    };

  case '[PRODUCT FORM] - Handle images':
    return {
      ...state,
      images: [ ...action.payload.images ]
    };

  default:
    return state;
  }
};
