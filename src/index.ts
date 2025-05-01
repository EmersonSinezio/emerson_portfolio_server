import express from "express";
import cors from "cors";
import { connectDB } from "./config/dbConfig";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Configuração específica para a Vercel
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database connected");
    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  } catch (error) {
    console.log("🔴 Connection error:", error);
    process.exit(1);
  }
};

startServer();

// Exportação necessária para a Vercel
export default app;
