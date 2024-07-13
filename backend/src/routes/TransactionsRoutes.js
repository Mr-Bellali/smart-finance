import express from "express";
import { addExpence, getDataFromExcel } from "../controllers/TransactionController.js";
import upload from "../middlewares/Uploadfile.js";

const transactionRoute = express.Router();

transactionRoute.post("/expence",addExpence);
transactionRoute.post("/datafromxcl", upload.single('file'), getDataFromExcel)

export default transactionRoute;