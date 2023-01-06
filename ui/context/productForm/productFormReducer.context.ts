import { IProductForm, IProductFormMedia, IProductFormOption, IProductFormVariant } from './';
import { PRODUCT_FORM_INIT_STATE } from './init_state.context';

type AuthActionType =
 | { type: '[PRODUCT FORM] - Reset store' }
 | { type: '[PRODUCT FORM] - Change title value', payload: { value: string } }
 | { type: '[PRODUCT FORM] - Set title error', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Change description value', payload: { value: string } }
 | { type: '[PRODUCT FORM] - Add default product option', payload: { option: IProductFormOption } }
 | { type: '[PRODUCT FORM] - Reset product options' }
 | { type: '[PRODUCT FORM] - Handle options', payload: { options: IProductFormOption[] } }
 | { type: '[PRODUCT FORM] - Handle variants', payload: { variants: IProductFormVariant[] } }
 | { type: '[PRODUCT FORM] - Handle add images', payload: { images: IProductFormMedia[] }}
 | { type: '[PRODUCT FORM] - Handle images', payload: { images: IProductFormMedia[] }}
 | { type: '[PRODUCT FORM] - Toggle product status', payload: { status: 'ACTIVE' | 'DRAFT' }}
 | { type: '[PRODUCT FORM] - Change vendor value', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Set vendor error', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Change category value', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Set category error', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Change product price', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Change product discount price', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Change product quantity', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Change product SKU', payload: { value: string }}
 | { type: '[PRODUCT FORM] - Change product barcode', payload: { value: string }}

export const productFormReducer = ( state: IProductForm, action: AuthActionType ): IProductForm => {

  switch (action.type) {

  case '[PRODUCT FORM] - Reset store':
    return PRODUCT_FORM_INIT_STATE;

  case '[PRODUCT FORM] - Change title value':
    return {
      ...state,
      title: {
        ...state.title,
        value: action.payload.value
      }
    };

  case '[PRODUCT FORM] - Set title error':
    return {
      ...state,
      title: {
        ...state.title,
        error: action.payload.value
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

  case '[PRODUCT FORM] - Handle add images':
    return {
      ...state,
      images: [ 
        ...state.images,
        ...action.payload.images 
      ]
    };

  case '[PRODUCT FORM] - Handle images':
    return {
      ...state,
      images: [ ...action.payload.images ]
    };

  case '[PRODUCT FORM] - Toggle product status':
    return {
      ...state,
      status: action.payload.status
    };

  case '[PRODUCT FORM] - Change vendor value':
    return {
      ...state,
      vendor: {
        ...state.vendor,
        value: action.payload.value
      }
    };

  case '[PRODUCT FORM] - Set vendor error':
    return {
      ...state,
      vendor: {
        ...state.vendor,
        error: action.payload.value
      }
    };

  case '[PRODUCT FORM] - Change category value':
    return {
      ...state,
      category: {
        ...state.category,
        value: action.payload.value
      }
    };

  case '[PRODUCT FORM] - Set category error':
    return {
      ...state,
      category: {
        ...state.category,
        error: action.payload.value
      }
    };

  case '[PRODUCT FORM] - Change product price':
    return {
      ...state,
      price: action.payload.value
    };

  case '[PRODUCT FORM] - Change product discount price':
    return {
      ...state,
      discountPrice: action.payload.value
    };

  case '[PRODUCT FORM] - Change product SKU':
    return {
      ...state,
      sku: action.payload.value
    };

  case '[PRODUCT FORM] - Change product barcode':
    return {
      ...state,
      barcode: action.payload.value
    };

  case '[PRODUCT FORM] - Change product quantity':
    return {
      ...state,
      inventory: action.payload.value
    };

  default:
    return state;
  }
};
