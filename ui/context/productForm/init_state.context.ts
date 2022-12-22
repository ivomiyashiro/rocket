export interface IProductFormMedia {
  id: string;
  url: string;
  isChecked: boolean;
}

export interface IProductFormOption { 
  id: string;
  name: { value: string; error: string };
  values: { id: string; name: string; error: string }[];
  editing: boolean;
}

export interface IProductFormVariant {
  id: string;
  name: string;
  inventory: string;
  price: string;
  discountPrice: string;
  sku: string;
  barcode: string;
  images: IProductFormMedia[];
  popupOpen: boolean;
}

export interface IProductForm {
  title: { value: string; error: string };
  description: { value: string; error: string };
  options: IProductFormOption[];
  variants: IProductFormVariant[];
  vendor: { value: string; error: string };
  category: { value: string; error: string };
  status: 'ACTIVE' | 'INACTIVE';
  images: IProductFormMedia[];
}

export const PRODUCT_FORM_INIT_STATE: IProductForm = {
  title: { value: '', error: '' },
  description: { value: '', error: '' },
  options: [],
  variants: [],
  vendor: { value: '', error: '' },
  category: { value: '', error: '' },
  status: 'ACTIVE',
  images: [],
};
