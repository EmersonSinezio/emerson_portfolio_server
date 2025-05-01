import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConfig";
import routes from "./routes";

const app = express();

// Configurações básicas
app.use(cors());
app.use(express.json());

// Conecta ao MongoDB antes de iniciar o servidor
connectDB().then(() => {
  console.log("✅ Database connected");
});

// Carrega as rotas
app.use(routes);

// Exportação no formato do Vercel (serverless)
export default app;
