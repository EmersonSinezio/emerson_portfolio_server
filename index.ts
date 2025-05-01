import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/dbConfig";
import routes from "./src/routes";

const app = express();

app.use(cors());
app.use(express.json());

// Conexão com MongoDB (sem iniciar servidor tradicional)
connectDB()
  .then(() => {
    console.log("✅ MongoDB conectado");
  })
  .catch((error) => {
    console.error("❌ Falha na conexão do MongoDB:", error);
    process.exit(1);
  });

// Carrega as rotas
app.use(routes);

// Exportação ESSENCIAL para o Vercel
export default app;
