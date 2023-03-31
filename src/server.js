import express from "express";
import { userRouter } from "./routers/index.js";
import { sequelize } from "./database/models/index.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (res) => {
  res.send("IHUZO WORKING");
});

app.use("/api/user", userRouter);

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
