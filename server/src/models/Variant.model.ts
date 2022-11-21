import { Schema, model } from 'mongoose';
import { IVariant } from '../interfaces';

const VariantScheme = new Schema<IVariant>({
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
  image: {
    type: String,
  }
}, { 
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model<IVariant>('Variant', VariantScheme);
