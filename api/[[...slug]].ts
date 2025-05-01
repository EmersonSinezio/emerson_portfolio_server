import app from "../index";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  // Remove headers problemáticos
  delete req.headers.connection;
  delete req.headers["accept-encoding"];

  // Converte req/res do Vercel para o formato do Express
  await app(req as any, res as any);
};
