import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use("/", (req, res) => {
  console.log(req.url);
  res.send("API is working");
});

server.listen(3000, () => {
  console.log("Server is up");
});
