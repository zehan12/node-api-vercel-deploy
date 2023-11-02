const express = require("express");
const app = express();
const port = process.env.port || 1000;

app.get("/api", (req, res) => {
  res.end("hello from vercel server");
});

app.get("/", (req, res) => {
  res.end("server is working");
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
