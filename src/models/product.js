"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    richDescription: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: '',
    },
    images: {
        type: [String],
        required: true,
    },
    brand: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        default: 0,
    },
    /*category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categoria',
      required: true,
    },*/
    countInStock: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});
exports.Product = mongoose_1.default.model('Product', productSchema);
