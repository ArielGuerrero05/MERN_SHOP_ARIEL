"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categoriaSchema = new mongoose_1.default.Schema({
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
exports.Categoria = mongoose_1.default.model('Categoria', categoriaSchema);
