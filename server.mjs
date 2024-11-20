import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./public")));
app.use("/component", express.static(path.join(__dirname, "./component")));

app.listen(port, () => {
  console.log(`running server at http://localhost:${port}`);
});
