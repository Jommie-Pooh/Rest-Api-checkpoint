const express = require("express");
const {
  createNewUser,
  getCurrentUser,
  verifyUserAccount,
} = require("../controllers/userController");
const requireSignin = require("../middlewares/requireSignin");
const {
  validateInput,
  checkValidationErrors,
} = require("../middlewares/dataValidator");
// const { verify } = require("../helpers/smtpTransport")
const userRouter = express.Router();
userRouter.post("/", validateInput(), checkValidationErrors, createNewUser);
userRouter.post("/", createNewUser);
userRouter.get("/me", requireSignin, getCurrentUser);
userRouter.put("/verify", verifyUserAccount);
module.exports = userRouter;
