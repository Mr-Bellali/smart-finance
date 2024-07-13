import { createProfile } from "../models/Profile.js";

const createProfileController = async (req, res) => {
  try {
    const createdProfile = await createProfile(req.body);
    return res.status(201).json({
      message: "Profile created successfully",
      profile: createdProfile,
    });
  } catch (error) {
    console.error('Error creating profile:', error);
    return res.status(500).json({ "error creating profile": error.message });
  }
};

export { createProfileController };
