export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'CUSTOMER' | 'ADMIN' | 'SUPERADMIN';
}

export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  options?: { _id: string; name: string; values: string[] }[];
  variants?: IVariant[];
  price?: string;
  discountPrice?: string;
  inventory?: string;
  sku?: string;
  barcode?: string;
  vendor: string;
  category: string;
  status: 'ACTIVE' | 'DRAFT';
  images: string[];
}

export interface IVariant {
  _id: string;
  name: string;
  inventory: string;
  price: string;
  discountPrice: string;
  sku: string;
  barcode: string;
  images: string[];
}

export interface IOption { 
  id: string;
  name: string;
  values: { id: number; name: string }[];
}

export type TSort = 'A - Z' | 'Z - A' | 'Low inventory' | 'High inventory' | 'Lowest Price' | 'Highest Price'
