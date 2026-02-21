const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const tourRouteRouter = require("./routes/tourRouteRoutes");

const app = express();

const defaultAllowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://tur-orienterings-app.onrender.com",
];

const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",").map((origin) => origin.trim())
  : defaultAllowedOrigins;

// Allow known browser origins and non-browser requests without Origin header (Postman/curl).
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    credentials: true,
  })
);

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
