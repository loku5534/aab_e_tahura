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
  date: yup.mixed().required(),
  description: yup.string(),
  ExpenseCategoryId: yup.number().required(),
});

const createExpenseCategoriesSchema = yup.object().shape({
  title: yup.string().required(),
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

const createInvoiceSchema = yup.object().shape({
  invoiceNumber: yup.string().required(),
  customerId: yup.number(),
  customerType: yup.string().required(),
  invoiceDate: yup.string().required(),
  invoiceTime: yup.string().required(),
  subtotalAmount: yup.number().required(),
  totalAmount: yup.number().required(),
  discountAmount: yup.number(),
  notes: yup.string(),
  status: yup.string(),
  paymentMethod: yup.string(),
});

const createPurchasedItemSchema = yup.object().shape({
  invoiceId: yup.number().required(),
  productId: yup.number(),
  image: yup.string().required(),
  itemName: yup.string().required(),
  quantity: yup.number().required(),
  unitPrice: yup.number().required(),
});

const createPayoutSchema = yup.object().shape({
  staffId: yup.number().required(),
  date: yup.string().required(),
  hasBonus: yup.boolean().required(),
  bonusAmount: yup.number().when("hasBonus", {
    is: (value) => value === true,
    then: () => yup.number().required(),
    otherwise: () => yup.number(),
  }),
  hasDeduction: yup.boolean().required(),
  deductionAmount: yup.number().when("hasDeduction", {
    is: (value) => value === true,
    then: () => yup.number().required(),
    otherwise: () => yup.number(),
  }),
  note: yup.string(),
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
  //ExpenseCategories
  createExpenseCategoriesSchema,
  //ProductCategories
  createProductCategoriesSchema,
  //Products
  createProductSchema,
  //Invoice
  createInvoiceSchema,
  //Purchased Item
  createPurchasedItemSchema,
  //Payout
  createPayoutSchema,
};
