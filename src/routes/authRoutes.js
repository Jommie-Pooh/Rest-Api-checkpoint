const express = require("express");
const {
  loginUser,
  logoutUser,
  generateNewAccessToken,
  resetPasswordRequest,
  updateUsersPassword,
} = require("../controllers/authController");
const requireSignin  = require("../middlewares/requireSignin");
const authRouter = express.Router();
authRouter.post("/login", loginUser);
authRouter.post("/logout", requireSignin, logoutUser);
authRouter.post("/reset-password", resetPasswordRequest);
authRouter.put("/update-password", updateUsersPassword);
authRouter.get("/access-token", generateNewAccessToken);
module.exports = authRouter;