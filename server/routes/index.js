import express from 'express';
import { testRoute } from './testRoute.js';
import { cityAdd } from './addCityRoute.js';
import { cityUpdate } from './updateCityRoute.js';
export const router = express.Router();

const baseUrl = "api/v1";

router.use(`/${baseUrl}/test`, testRoute);
router.use(`/${baseUrl}/add`, cityAdd);
router.use(`/${baseUrl}/update`, cityUpdate);