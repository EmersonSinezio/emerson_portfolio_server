// index.ts
import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/dbConfig";
import routes from "./src/routes";

const app = express();

app.use(cors());
app.use(express.json());

// Conecte ao MongoDB SEM iniciar o servidor tradicional
const startServer = async () => {
  try {
    await connectDB().then(() => console.log("✅ Conectado ao MongoDB"));
    app.listen(3000, () => {
      console.log("✅ Servidor iniciado na porta 3000");
    });
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
  }
};

startServer();

app.use(routes);

// Exportação para o Vercel
export default app;
