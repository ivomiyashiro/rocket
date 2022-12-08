interface IImage {
  id: string;
  url: string;
  isChecked: boolean;
}

export interface IProductForm {
  title: string;
  description: string;
  options: { 
    id: string;
    name: string;
    values: { id: number; name: string }[];
    editing: boolean;
  }[];
  variants: {
    id: string;
    name: string;
    inventory: string;
    price: string;
    discountPrice: string;
    sku: string;
    barcode: string;
    images: IImage[];
  }[];
  vendor: string;
  category: string;
  status: 'ACTIVE' | 'INACTIVE';
  images: IImage[];
}

export const PRODUCT_FORM_INIT_STATE: IProductForm = {
  title: '',
  description: '',
  options: [],
  variants: [],
  vendor: '',
  category: '',
  status: 'ACTIVE',
  images: [],
};
