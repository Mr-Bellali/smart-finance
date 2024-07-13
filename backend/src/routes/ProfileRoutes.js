import express from "express";
import { createProfileController } from "../controllers/ProfileController.js";

const profileRoute = express.Router();

profileRoute.post("/profile",createProfileController)

export default profileRoute