import express from "express";
import { updateCity } from "../controllers/updateCityController.js";

export const cityUpdate = express.Router();

cityUpdate.put("/cities/:name", updateCity);
