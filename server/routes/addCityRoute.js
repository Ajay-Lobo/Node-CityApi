import express from 'express';
import { addCity } from '../controllers/addCityController.js';

export const cityAdd = express.Router();

// Route to add a new city
cityAdd.post('/cities', addCity);


