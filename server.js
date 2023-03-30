import express from "express";
import { newsRouter } from "./src/routers/index.js";
import { sequelize } from "./src/utils/database.js";

const app = express();

app.get("/", (req, res) => {
  res.send("IHUZO WORKING");
});

app.use("/news", newsRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

sequelize
  .sync()
  .then((result) => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });
