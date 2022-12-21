const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
  try {
    // mongoose.set("useCreateIndex", true);
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log("Mongodb connected successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
