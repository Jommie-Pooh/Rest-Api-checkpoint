const express = require("express");
const requireSignin = require("../middlewares/requireSignin");
const { createBlog, getBlogs, getSingleBlog} = require("../controllers/blogController");
const blogRouter = express.Router();


blogRouter.post("/", requireSignin, createBlog);
blogRouter.get("/", getBlogs);
blogRouter.get("/:blogId", getSingleBlog);

module.exports = blogRouter; 