import { Schema } from 'mongoose';
import { IVariant } from '../interfaces';

export const VariantScheme = new Schema<IVariant>({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
  },
  sku: {
    type: String,
    default: null,
  },
  barcode: {
    type: String,
    default: null,
  },
  inventory: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    default: ['']
  }
}, { 
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
