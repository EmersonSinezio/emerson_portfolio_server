import { Router } from "express";
import contactController from "./controllers/contactController";

const router = Router();

// Rotas GET
router.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  contactController.read(req, res);
});

// Rotas POST
router.post("/send", contactController.create);

export default router;
