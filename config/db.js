import mongoose from "mongoose";
import 'dotenv/config'


// creating a database connection

const dbconnect = process.env.mongodb_uri

export const dbconnection = async () => {
    try {
        await mongoose.connect(dbconnect)
        console.log('database is connected')
    } catch (error) {
       console.log(error) 
    }
}



