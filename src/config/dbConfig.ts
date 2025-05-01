import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Validação robusta
if (!process.env.MONGODB_URI) {
  throw new Error("🔴 Erro: Variável MONGODB_URI não definida no .env");
}

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ Erro de conexão: ${(error as Error).message}`);
    process.exit(1);
  }
};

export { mongoose, connectDB };
