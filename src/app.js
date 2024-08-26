const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes")
const blogRouter = require("./routes/blogRoutes");
const app = express();
// global middleware configuration to receive JSON data from client
app.use(express.json());
// global middleware configuration for cross origin resource sharing
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
// global middleware configuration for cookie parser
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Server is live");
});
app.use("/users", userRouter);
app.use("/auth", authRouter)
app.use("/blogs", blogRouter);
module.exports = app;