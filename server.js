const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();

const PORT = process.env.PORT || 4001;

require("./config/dbSync");

// app.use(express.json());
app.use(bodyParser.json());

const { authRoutes } = require("./routes");

app.use("/api/auth/", authRoutes);

app.get("*", (req, res) => {
  res.json("Welcome to Aab_E Tahura");
});

app.listen(PORT, function () {
  console.log("Server listening on port " + PORT);
});
