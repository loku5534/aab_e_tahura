const yup = require("yup");

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const authSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const userSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
});

const staffSchema = yup.object().shape({
  cnic: yup.string(),
  salary: yup.string(),
  phone: yup.string().required(),
  employmentType: yup.string().required(),
  joiningDate: yup.string().required(),
  note: yup.string(),
  isActive: yup.boolean().required(),
  leavingDate: yup.string().when("isActive", {
    is: (status) => status === false,
    then: () => yup.string().required(),
    otherwise: () => yup.string(),
  }),
  UserId: yup.number().required(),
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

const createProductCategoriesSchema = yup.object().shape({
  title: yup.string().required(),
});

const createProductSchema = yup.object().shape({
  image: yup.string().required(),
  title: yup.string().required(),
  price: yup.number().required(),
  onCounter: yup.boolean().required(),
  onDelivery: yup.boolean().required(),
  ProductCategoryId: yup.number().required(),
});

module.exports = {
  loginSchema,
  authSchema,
  userSchema,
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
  //ProductCategories
  createProductCategoriesSchema,
  //Products
  createProductSchema,
};
