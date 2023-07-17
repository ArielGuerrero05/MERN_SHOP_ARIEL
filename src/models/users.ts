import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    default: '',
  },
  zip: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    default: 0,
  },
});

export const User = mongoose.model('User', userSchema);