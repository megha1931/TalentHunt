import mongoose from "mongoose";

import {ENV} from "./env.js"
export const connectDB = async()=>{
    try{
        //in case you dont have a db url defined it will throw an error
        if(!ENV_DB_URL){
            throw new Error("DB_URL is not defined ")
        }

        const conn = await mongoose.connect(ENV.DB_URL)
         console.log("connected to db",conn.connection.host);
         
    }catch(error){
       console.log("error connecting mongodb",error)
       process.exit(1)//0 means succes and 1 means failure
    }
}