import express from "express";
import http from "http";
import path from "path";

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
