import express from "express";
import { cityAdd } from "./addCityRoute.js";
import { cityUpdate } from "./updateCityRoute.js";
import { cityDelete } from "./deleteCityRoute.js";
import { cityGet } from "./getCityRoute.js";
export const router = express.Router();

const baseUrl = "api/v1";

router.use(`/${baseUrl}/add`, cityAdd);
router.use(`/${baseUrl}/update`, cityUpdate);
router.use(`/${baseUrl}/delete`, cityDelete);
router.use(`/${baseUrl}/`, cityGet);
