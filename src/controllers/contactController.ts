import { Request, Response } from "express";
import contactData from "../models/contactData";

export default {
  async read(req: Request, res: Response) {
    try {
      const data = await contactData.find();
      res.json(data); // Removed return
    } catch (er) {
      console.log(er);
      res.status(500).json({ error: "Erro interno do servidor" + er });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        res.status(400).json({ error: "Preencha todos os campos" }); // Removed return
        return;
      }

      const contactCreated = await contactData.create({
        name,
        email,
        message,
        date: new Date(),
      });

      res.status(201).json(contactCreated); // Removed return
    } catch (er) {
      console.log(er);
      res.status(500).json({ error: "Falha ao criar contato" + er });
    }
  },
};
