const Blog = require("../models/blogModel");
const getPagination = require("../helpers/paginationHelpers");

// creatm a new Blog
const createBlog = async (req, res) => {
    const {userId} = req.user;
    const {title, content} = req.body;
    
    try {

        const newBlog = new Blog({ title, content, user: userId });

    await newBlog.save();

    if (!newBlog) {
        return res.status(400).json({ error: "Blog creation failed" });
    }
    return res.status(201).json({ message: "Blog created successfully", newBlog });

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};


// get all blogs
const getBlogs = async (req,res) => {
    console.log(req.query);
    try {
        const { skip, limit } = getPagination(req.query);
        const blogs = await Blog.find().skip(skip).limit(limit).populate("user", "email _id");

        return res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
// get single blog
const getSingleBlog = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};  

module.exports = { createBlog, getBlogs, getSingleBlog };
