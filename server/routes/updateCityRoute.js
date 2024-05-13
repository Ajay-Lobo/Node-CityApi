import express from 'express';
import { updateCity } from '../controllers/updateCityController.js';

export const cityUpdate = express.Router();

// Route to update an existing city by name
cityUpdate.put('/cities/:name', updateCity);



