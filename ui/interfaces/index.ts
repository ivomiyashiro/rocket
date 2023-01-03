export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'CUSTOMER' | 'ADMIN' | 'SUPERADMIN';
}

export interface IProduct {
  title: string;
  description: string;
  options?: { name: string; values: string[] }[];
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
  name: string;
  inventory: number;
  price: number;
  discountPrice: number;
  sku: string;
  barcode: string;
  images: string[];
}

export interface IOption { 
  id: string;
  name: string;
  values: { id: number; name: string }[];
}
