const mongoose = require("mongoose");

const dbURL = process.env.MONGO_URL;

mongoose
  .connect(dbURL)
  .then((result) => console.log(`DB Connected Successfully. ${result}`))
  .catch((error) => console.log(`Error: ${error}`));
