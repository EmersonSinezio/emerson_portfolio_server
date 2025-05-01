"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
exports.default = async (req, res) => {
    // Remove headers problemáticos
    delete req.headers.connection;
    delete req.headers["accept-encoding"];
    // Converte req/res do Vercel para o formato do Express
    await (0, index_1.default)(req, res);
};
