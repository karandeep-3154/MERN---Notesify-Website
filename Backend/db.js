const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://ksingh3154:coder@cluster0.uw6rcrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    const con = await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB ${con.connection.host} Successfully Ji`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
// https://dribbble.com/shots/6236115-Elephant-Notes-website/attachments/6236115?mode=media