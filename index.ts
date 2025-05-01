import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/dbConfig";
import routes from "./src/routes";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();

export default app;
