import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/dbConnect.js';
import { router } from './routes/index.js';
dotenv.config();

const app = express();
app.setMaxListeners(20); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.listen(process.env.port ,()=>{
    console.log(`Server is running on ${process.env.port} port....`);
    dbConnect();
});