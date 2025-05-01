// index.ts
import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConfig";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

// Conecte ao MongoDB SEM iniciar o servidor tradicional
connectDB().then(() => {
  console.log("✅ MongoDB conectado");
});

app.use(routes);

// Exportação para o Vercel
export default app;
