import express from "express";
import routes from "./routes/index.js";
import cors from 'cors';
import AuthMiddleware from './middlewares/Tokenverification.js'
import connectDB from "./models/db.js";

const app = express();
app.use(cors());
// app.use(AuthMiddleware.decodeToken)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB()

app.use(routes)



app.listen(8000, ()=>{
    console.log("Server is running on PORT 8000...")
})