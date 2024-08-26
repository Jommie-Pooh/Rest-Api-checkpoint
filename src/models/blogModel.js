const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },

    comments:[{ type: Schema.Types.ObjectId, ref: "comment" }],
},
{ timestamps: true }
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;