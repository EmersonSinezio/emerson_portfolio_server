import { Router } from "express";
import contactController from "./controllers/contactController";

const router = Router();

// Rotas GET
router.get("/", contactController.read);

// Rotas POST
router.post("/send", contactController.create);

export default router;
