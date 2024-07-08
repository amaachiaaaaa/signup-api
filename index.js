import express from 'express'
import bcrypt from 'bcrypt';
import 'dotenv/config'
import { dbconnection } from './config/db.js';
import { router } from './router/route.js';




// connecting to database
dbconnection();

const app = express();





//creating a middleware
app.use(express.json())
app.use(router);



// creating port

const PORT = 8000
app.listen(PORT,() => {
    console.log(`listening to Port ${PORT}`)
});