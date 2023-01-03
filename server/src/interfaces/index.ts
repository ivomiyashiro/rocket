import { Request } from 'express';
import { Document } from 'mongoose';

export interface IAuthRequest extends Request {
  auth?: {
    uid: string;
    name: string;
    role: 'CUSTOMER' | 'ADMIN' | 'SUPERADMIN';
  }
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'CUSTOMER' | 'ADMIN' | 'SUPERADMIN';
  comparePassword: (password: string) => Promise<boolean>;
}

export interface IProduct {
  title: string;
  description: string;
  options: { name: string; values: string[] }[]
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
  image: string;
}

export interface IOrder extends Document {
  number: string;
  productsIDs: string[];
  totalPrice: number;
  status: 'DELIVERED' | 'PENDING' | 'CANCELLED';
  phoneNumber: string;
  customer: {
    name: string;
    email: string;
  };
  shippingAddress: {
    city: string;
    locality: string;
    address: string;
    apartment?: string;
    zip: string;
  }
}
