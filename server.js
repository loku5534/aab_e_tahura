const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();

const PORT = process.env.PORT || 4001;


const DATABASE = require("./config/dbConfig");

// app.use(express.json());
app.use(bodyParser.json());

const { authRoutes } = require("./routes");
const { staffRoutes } = require("./routes");

app.use("/api/auth/", authRoutes);
app.use("/api/staff/", staffRoutes);


app.get("*", (req, res) => {
  res.json("Welcome to Aab_E Tahura");
});
app.listen(PORT, function () {
  console.log("Server listening on port " + PORT);
});
