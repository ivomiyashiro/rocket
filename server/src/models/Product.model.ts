import { Schema, model } from 'mongoose';
import { IProduct } from '../interfaces';
import ProductVariant from './Variant';

const ProductSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  options: {
    type: [{
      name: {
        type: String,
        require: true
      },
      values: {
        type: [String]
      }
    }],
    default: []
  },
  variants: {
    type: [ProductVariant.schema],
    default: null
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum : ['ACTIVE', 'INACTIVE'],
    default: 'ACTIVE'
  },
  images: {
    type: [String]
  }
}, { 
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model<IProduct>('Product', ProductSchema);
