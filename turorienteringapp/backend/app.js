const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const tourRouteRouter = require("./routes/tourRouteRoutes");

// Load environment variables from the config.env file
require("dotenv").config({ path: "./.env" });

const app = express();

// Use CORS middleware to handle CORS
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://tur-orienterings-app.onrender.com'] 
    : 'http://localhost:3000',
  credentials: true
}));

// Middleware
app.use(express.json());

// Mounted Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tourRoutes", tourRouteRouter);

// For all undefined routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Can't find requested url on this server!",
  });
});

module.exports = app;
