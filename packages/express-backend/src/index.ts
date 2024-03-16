import express, { Request, Response } from "express";
import * as path from "path";
import { PathLike } from "node:fs";
import cors from "cors";
import { connect } from "./mongoConnect";
import { loginUser, registerUser } from "./auth";
import apiRouter from "./routes/api";
import profiles from "./profiles";
import { Profile } from "ts-models";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connect("Bookshelf");

const frontend = "lit-frontend";
let cwd = process.cwd();
let dist: PathLike | undefined;
let indexHtml: PathLike | undefined;

try {
  indexHtml = require.resolve(frontend);
  dist = path.dirname(indexHtml.toString());
} catch (error: any) {
  console.log(`Could not resolve ${frontend}:`, error.code);
  dist = path.resolve(cwd, "..", frontend, "dist");
  indexHtml = path.resolve(dist, "index.html");
}

app.post("/login", loginUser);
app.post("/signup", registerUser);

app.use("/api", apiRouter);

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});