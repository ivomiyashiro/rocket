import { Schema, model } from 'mongoose';
import { IOrder } from '../interfaces';

const OrderScheme = new Schema<IOrder>({
  number: {
    type: String,
    unique: true,
    require: true
  },
  productsIDs: {
    type: [String],
    requied: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['DELIVERED', 'PENDING', 'CANCELLED'],
    default: 'PENDING'
  },
  customer: {
    type: {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },
    required: true
  },
  shippingAddress: {
    type: {
      city: {
        type: String,
        required: true
      },
      locality: {
        type: String,
        require: true,
      },
      address: {
        type: String,
        require: true,
      },
      zip: {
        type: String,
        require: true,
      }
    },
    required: true
  }
}, { 
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model<IOrder>('Order', OrderScheme);
