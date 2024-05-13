import express from "express";
import { addCity } from "../controllers/addCityController.js";

export const cityAdd = express.Router();

cityAdd.post("/cities", addCity);
