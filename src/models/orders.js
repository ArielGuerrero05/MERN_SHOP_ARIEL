"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
    },
    orderItems: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
});
exports.Order = mongoose_1.default.model('Order', orderSchema);
