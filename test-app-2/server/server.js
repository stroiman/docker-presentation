const express = require("express");
const api = require("./api");

const app = express();

app.use("/api", api);

app.use(express.static(__dirname + "/build"));

app.listen(9000);
