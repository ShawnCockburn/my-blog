"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dev = process.env.dev;
const envPort = process.env.port;
const portNumber = Number.parseInt(envPort);
if (envPort !== undefined && isNaN(portNumber))
  throw new Error(`port needs to be a number, port observed: ${envPort}`);
const express = require("express");
const app = express();

console.log(__dirname);
app.use("/", express.static("build"));
app.get("/", (req, res) => {
  res.sendFile("build/index.html", { root: __dirname });
});
const server = (port) =>
  app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
if (dev) {
  server(5500);
} else {
  envPort ? server(portNumber) : server(5500);
}
