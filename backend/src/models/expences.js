import mongoose from "mongoose";
import Expences from "../schema/Expences.js"
import { v4 as uuidv4 } from 'uuid';

export const createExpence = async (ExpencesData) => {
    const { userId, description, title, amount, category } = ExpencesData;

    const newExpence = new Expences({
        userId,
        title,
        description,
        amount,
        category
    });

    try {
        const expence = await newExpence.save();
        console.log("expence created in the database:", expence);
        return expence;
    } catch (error) {
        console.error("error in db creating expence:", error.message);
        throw error;
    }
};
