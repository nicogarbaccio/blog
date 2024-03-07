import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log(
      "connected to database: ",
      process.env.MONGODB_CONNECTION_STRING
    );
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
