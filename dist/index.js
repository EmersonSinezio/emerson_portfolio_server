"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = require("./config/dbConfig");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
// Configuração específica para a Vercel
const startServer = async () => {
    try {
        await (0, dbConfig_1.connectDB)();
        console.log("✅ Database connected");
        const port = process.env.PORT || 3001;
        app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
    }
    catch (error) {
        console.log("🔴 Connection error:", error);
        process.exit(1);
    }
};
// Inicia o servidor apenas se não estiver em ambiente de deploy da Vercel
if (process.env.NODE_ENV !== "production") {
    startServer();
}
// Exportação necessária para a Vercel
exports.default = app;
