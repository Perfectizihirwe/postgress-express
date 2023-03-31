import express from "express";
import { userRouter } from "./routers/index.js";
import  {sequelize}  from "./database/models/index.js";

const app = express();

app.get("/", (req, res) => {
  res.send("IHUZO WORKING");
});

app.use("/user", userRouter);

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

app.listen(3000, () => {
  console.log("Server listening on port 3000");
  connectDb();
});
