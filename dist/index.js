"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = require("./src/config/dbConfig");
const routes_1 = __importDefault(require("./src/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Conexão com MongoDB (sem iniciar servidor tradicional)
(0, dbConfig_1.connectDB)()
    .then(() => {
    console.log("✅ MongoDB conectado");
})
    .catch((error) => {
    console.error("❌ Falha na conexão do MongoDB:", error);
    process.exit(1);
});
// Carrega as rotas
app.use(routes_1.default);
// Exportação ESSENCIAL para o Vercel
exports.default = app;
