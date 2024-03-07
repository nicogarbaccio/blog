import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

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
