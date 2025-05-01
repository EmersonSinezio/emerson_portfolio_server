import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Validação reforçada
if (!process.env.MONGODB_URI) {
  throw new Error("🔴 Erro: MONGODB_URI não definida no .env");
}

const MONGODB_URI = process.env.MONGODB_URI;

// Configurações otimizadas para Serverless
const mongooseOptions: mongoose.ConnectOptions = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
  keepAlive: true,
  heartbeatFrequencyMS: 10000,
} as mongoose.ConnectOptions;

// Cache de conexão
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, mongooseOptions)
      .then((mongoose) => {
        console.log(`✅ MongoDB conectado: ${mongoose.connection.host}`);
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export { mongoose, connectDB };
