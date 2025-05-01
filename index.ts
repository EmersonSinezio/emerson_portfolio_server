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
    console.log("📡 Iniciando conexão...");
    await connectDB();
    next();
  } catch (err: unknown) {
    console.error("💥 Erro durante a conexão:");
    console.error(err);
    res.status(500).json({
      error: "Erro de conexão com o banco de dados",
      details:
        process.env.NODE_ENV === "development" && err instanceof Error
          ? err.message
          : undefined,
    });
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
