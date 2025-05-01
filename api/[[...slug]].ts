import app from "../src/index"; // Caminho corrigido

export default async (req: any, res: any) => {
  // Remova headers problemáticos
  delete req.headers.connection;
  delete req.headers["accept-encoding"];

  await app(req, res);
};
