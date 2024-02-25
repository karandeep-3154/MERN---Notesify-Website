// // import dotenv from "dotenv";
// // import express from "express";
// const connectDB = require("./db");
// // const dotenv = require("dotenv");
// //CONFIGURING ENVIRONMENT
// // dotenv.config();
// //connecting to database
// const start = async () => {
//   try {
//     await connectDB();
//     app.listen(8080, () => console.log(`Server is listening on port 8081...`));
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

// const cors = require("cors");
// const express = require("express");
// const app = express();

// app.use(cors());
// const port = 8080;

// app.use(express.json());

// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

// Initialize Express app
const app = express();
const port = process.env.PORT || 8080; // Use port from environment variable or default to 8080

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Start the server after connecting to the database
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process if server fails to start
  }
};

start();
