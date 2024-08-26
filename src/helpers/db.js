const mongoose = require("mongoose");
const { DB_URI } = require("../config/index");
const connectDb = async () => {
  await mongoose
    .connect(DB_URI)
    .then(() => console.log("database is connected"))
    .catch((error) => console.log("database connection failed"));
};
module.exports = connectDb;