import express from "express";
import { getAllCities } from "../controllers/getCityController.js";

export const cityGet = express.Router();

cityGet.get("/city", getAllCities);
