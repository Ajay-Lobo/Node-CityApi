import express from "express";
import { deleteCity } from "../controllers/deleteCityController.js";

export const cityDelete = express.Router();

cityDelete.delete("/cities/:name", deleteCity);
