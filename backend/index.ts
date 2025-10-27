import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';


import { connectDB } from './db/db';
import {registerUser} from './controller/registerController'


dotenv.config();

const app = express();

app.use(cors()); // allow requests from frontend
app.use(express.json()); // <-- this is important
app.use(express.urlencoded({ extended: true }));


app.use("/api/register-user", registerUser);

connectDB();
const PORT = process.env.PORT || '5000';

const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      console.log(`port is running at ${PORT}`);
    });
  } catch (error) {
    console.error("port is not running properly", error);
    process.exit(1);
  }
};
startServer();