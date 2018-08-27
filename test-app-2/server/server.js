const express = require("express");
const api = require("./api");

const app = express();
app.get("/", (req,res) => {
  res.send("Hello");
});

app.use("/api", api);

app.listen(9000);
