import 'dotenv/config'
import express from "express";
import { routes } from "./routes";
import { webhooks } from "./webhooks";
import cors from "cors";


const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors())

app.use(express.json());

app.use(routes);
app.use(webhooks);

app.listen(PORT, () => {
  console.log(`✅Server is runing on http://localhost:${PORT}`)
})