const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://michaelabeyer87:fO0d9V2bbyJ5WZHH@cluster0.qhzszmm.mongodb.net/babymap_db"
  );
  console.log("Database Connected");
};

module.exports = connectDB;
