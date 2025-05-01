"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = require("./config/dbConfig");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Conecte ao MongoDB SEM iniciar o servidor tradicional
(0, dbConfig_1.connectDB)().then(() => {
    console.log("✅ MongoDB conectado");
});
app.use(routes_1.default);
// Exportação para o Vercel
exports.default = app;
