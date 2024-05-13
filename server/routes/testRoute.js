import express from 'express';

export const testRoute = express.Router();

testRoute.get('/', (req, res) => {
    console.log("the basic test for testRoute");
    res.send("Basic test for testRoute successful!"); 
});