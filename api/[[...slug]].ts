import app from "../src/index"; // Importe o app do seu index.ts

export default async (req: any, res: any) => {
  // Remova o cabeçalho "Connection" manualmente
  req.headers.connection = null;

  // Delegue o tratamento para o Express
  await app(req, res);
};
