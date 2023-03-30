import express from "express";
export const newsRouter = express.Router();
import { home } from "../controllers/index.js";

newsRouter.get("/", home);
