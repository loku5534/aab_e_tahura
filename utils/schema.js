const yup = require("yup");

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const singupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const staffSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  cnic: yup.string().required(),
  phone: yup.string().required(),
  role: yup.string().required(),
  employeeType: yup.string().required(),
  joiningDate: yup.string().required(),
});

const resetPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const createPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  otp: yup.number().required(),
});

const updatePasswordSchema = yup.object().shape({
  password: yup.string().required(),
});

const updateProfileSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

// Routes Related
const createRouteSchema = yup.object().shape({
  title: yup.string().required(),
  startPoint: yup.string().required(),
  endPoint: yup.string().required(),
});

const createSubRouteSchema = yup.object().shape({
  title: yup.string().required(),
  routeId: yup.number().required(),
});

//Vehicles
const createVehicleSchema = yup.object().shape({
  brand: yup.string().required(),
  number: yup.string().required(),
  model: yup.string().required(),
  note: yup.string(),
});

//Expenses
const createExpenseSchema = yup.object().shape({
  title: yup.string().required(),
  amount: yup.number().required(),
  category: yup.number().required(),
  date: yup.mixed().required(),
  description: yup.string(),
});

module.exports = {
  loginSchema,
  singupSchema,
  staffSchema,
  resetPasswordSchema,
  createPasswordSchema,
  updatePasswordSchema,
  updateProfileSchema,
  // Routes Related
  createRouteSchema,
  createSubRouteSchema,
  //Vehicles
  createVehicleSchema,
  //Expenses
  createExpenseSchema,
};
