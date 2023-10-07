const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Hello from server");
  res.status(200);
  res.send("HELLO");
});

app.get("/course", (req, res) => {
  //res.status(200);
  res.send({ name: "NODE API", desc: "LEARN NODEJS" });
});

module.exports = app;
