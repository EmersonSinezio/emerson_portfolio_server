import { VercelRequest, VercelResponse } from "@vercel/node";
import { Request, Response } from "express";
import app from "../index";

export default async (vercelReq: VercelRequest, vercelRes: VercelResponse) => {
  // Converter para tipos do Express
  const expressReq = vercelReq as unknown as Request;
  const expressRes = vercelRes as unknown as Response;

  // Remover headers problemáticos
  delete expressReq.headers.connection;
  delete expressReq.headers["accept-encoding"];

  // Executar o app Express
  await app(expressReq, expressRes);
};
