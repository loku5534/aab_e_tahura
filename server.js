const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();

const PORT = process.env.PORT || 4001;

const cors = require("cors");

require("./config/dbSync");

// app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

const {
  authRoutes,
  routeRoutes,
  subRouteRoutes,
  vehiclesRoutes,
  expensesRoutes,
} = require("./routes");

app.use("/api/auth/", authRoutes);

app.use("/api/routes/", routeRoutes);

app.use("/api/sub-routes/", subRouteRoutes);

app.use("/api/vehicles/", vehiclesRoutes);

app.use("/api/expenses/", expensesRoutes);

/**
 * 🟢 Required Controlls and paths
 * ⬇️
 * ✅ Vehicles: "All vehicles!"
 * ✅ Routes: "All Routes!"
 * ✅ Staff: "All staff members!"
 * ✅ Customers: "All registred customers!"
 * ✅ UnReg Customers: "All unregistered customers."
 * ✅ Payouts: All the salaries paid out to the staff members.
 * ✅ Expenses: To show all the expenses made by the company.
 * ✅ Expense Report: To show the sum of all expenses and all payouts for a particular month.
 * */

app.get("*", (req, res) => {
  res.json("Welcome to Aab_E Tahura");
});

app.listen(PORT, function () {
  console.log("Server listening on port " + PORT);
});
