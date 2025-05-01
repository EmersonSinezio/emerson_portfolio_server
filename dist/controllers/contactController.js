"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactData_1 = __importDefault(require("../models/contactData"));
exports.default = {
    async read(req, res) {
        try {
            const data = await contactData_1.default.find();
            res.json(data); // Removed return
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    },
    async create(req, res) {
        try {
            const { name, email, message } = req.body;
            if (!name || !email || !message) {
                res.status(400).json({ error: "Preencha todos os campos" }); // Removed return
                return;
            }
            const contactCreated = await contactData_1.default.create({
                name,
                email,
                message,
                date: new Date(),
            });
            res.status(201).json(contactCreated); // Removed return
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Falha ao criar contato" });
        }
    },
};
