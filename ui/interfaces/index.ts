export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'CUSTOMER' | 'ADMIN' | 'SUPERADMIN';
}

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  options: IOption[];
  variants: IVariant[];
  vendor: string;
  category: string;
  status: 'ACTIVE' | 'INACTIVE';
  images: IImage[];
}

export interface IOption { 
  id: string;
  name: string;
  values: { id: number; name: string }[];
}

export interface IVariant {
  id: string;
  name: string;
  inventory: string;
  price: string;
  discountPrice: string;
  sku: string;
  barcode: string;
  images: IImage[];
}

export interface IImage {
  id: string;
  url: string;
}
