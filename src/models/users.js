"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
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
exports.User = mongoose_1.default.model('User', userSchema);
