import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  DB_url: process.env.DB_url,
  NODE_ENV : process.env.NODE_ENV
};
