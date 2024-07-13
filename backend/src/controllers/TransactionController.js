import { StatusCodes } from "http-status-codes";
import excelToJson from "convert-excel-to-json";
import fs from "fs-extra";
import { createExpence } from "../models/expences.js";


const addExpence = async (req, res) => {
  try {
      const { title, amount, description, category, userId } = req.body;

      if (!title || !amount || !description || !category) {
          console.error('Missing fields:', req.body);
          return res.status(400).json({ error: "All fields are required" });
      }

      if (amount > 0) {
          console.error('Amount is positive:', amount);
          return res.status(400).json({ error: "Amount should be negative" });
      }

      const newExpence = { title, amount, description, userId, category };

      console.log("backend expence data:", newExpence);

      const createdExpence = await createExpence(newExpence);

      return res.status(201).json({ message: "Transaction added successfully", expence: createdExpence });
  } catch (error) {
      console.error('Error adding transaction:', error);
      return res.status(500).json({ error: "Internal server error" });
  }
};

const getDataFromExcel = async (req, res) => {
  try {
    if (!req.file || !req.file.filename) {
      return res.status(400).json("No file uploaded");
    }

    const filePath = `uploads/${req.file.filename}`;
    console.log(`File path: ${filePath}`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json("File not found");
    }

    const excelData = excelToJson({
      sourceFile: filePath,
      header: {
        rows: 1,
      },
      columnToKey: {
        "*": "{{columnHeader}}",
      },
    });

    await fs.remove(filePath); // Ensure the file is removed after processing

    res.status(200).json(excelData);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json("Error processing file");
  }
};

export { addExpence, getDataFromExcel };
