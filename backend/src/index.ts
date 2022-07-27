import express from "express";
const app = express();
import cors from "cors";
import router from "./Routes/router";

console.log(process.env)

const envPort = process.env.port;
const portNumber = Number.parseInt(envPort);
if (envPort !== undefined && isNaN(portNumber))
  throw new Error(`port needs to be a number, port observed: ${envPort}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(router);

const server = (port) =>
  app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });

server(portNumber);
