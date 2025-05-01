"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactController_1 = __importDefault(require("./controllers/contactController"));
const router = (0, express_1.Router)();
// Rotas GET
router.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    contactController_1.default.read(req, res);
});
// Rotas POST
router.post("/send", contactController_1.default.create);
exports.default = router;
