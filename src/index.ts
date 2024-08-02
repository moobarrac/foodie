import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Heloo world" });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
