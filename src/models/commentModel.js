const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref:"user",
            required: true,
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;