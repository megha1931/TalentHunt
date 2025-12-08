import mongoose from "mongoose";

import {ENV} from "./env.js"
export const connectDB = async()=>{
    try{
<<<<<<< HEAD
=======
        //in case you dont have a db url defined it will throw an error
        //in case you dont have a db url defined
        if(!ENV_DB_URL){
            throw new Error("DB_URL is not defined ")
        }

>>>>>>> c0d4330b2ef9e9ad95b771be3cbd1ec3e040f95d
        const conn = await mongoose.connect(ENV.DB_URL)
         console.log("connected to db",conn.connection.host);
         
    }catch(error){
       console.log("error connecting mongodb",error)
       process.exit(1)//0 means succes and 1 means failure
    }
}