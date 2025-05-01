"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Validação robusta
if (!process.env.MONGODB_URI) {
    throw new Error("🔴 Erro: Variável MONGODB_URI não definida no .env");
}
const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async () => {
    try {
        const conn = await mongoose_1.default.connect(MONGODB_URI);
        console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
        return conn;
    }
    catch (error) {
        console.error(`❌ Erro de conexão: ${error.message}`);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
