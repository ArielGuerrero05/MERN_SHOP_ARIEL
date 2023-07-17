import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  orderItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  }],
  shippingAddress1: {
    type: String,
    required: true,
  },
  shippingAddress2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    default: '',
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  dateOrdered: {
    type: Date,
    default: Date.now,
  },
});

export const Order = mongoose.model('Order', orderSchema);