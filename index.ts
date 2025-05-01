import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { connectDB } from "./src/config/dbConfig";
import routes from "./src/routes";

const app: express.Application = express();

// Middlewares com tipagem explícita
app.use(cors());
app.use(express.json());

// Middleware de conexão com tipagem completa
app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    const err = error as Error;
    console.error("❌ Erro de conexão:", err.message);
    res.status(500).json({ error: "Erro de conexão com o banco de dados" });
  }
});

// Rotas
app.use(routes);

// Handler para favicon.ico
app.get("/favicon.ico", (req: Request, res: Response) => res.status(204).end());

// Error handling centralizado com tipagem adequada
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("🔥 Erro crítico:", err.message);
  res.status(500).json({ error: "Erro interno do servidor" });
});

export default app;
