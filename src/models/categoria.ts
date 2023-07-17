import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
});

export const Categoria = mongoose.model('Categoria', categoriaSchema);