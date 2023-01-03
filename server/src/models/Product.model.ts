import { Schema, model } from 'mongoose';
import { IProduct } from '../interfaces';
import { VariantScheme } from './Variant.model';

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
  price: {
    type: String,
  },
  discountPrice: {
    type: String
  },
  inventory: {
    type: String,
    default: '0',
    require: true
  },
  sku: {
    type: String,
  },
  barcode: {
    type: String,
  },
  variants: {
    type: [VariantScheme]
  },
  vendor: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum : ['ACTIVE', 'DRAFT'],
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
