import Profile from "../schema/Profile.js";

export const createProfile = async (profileData) => {
  const { uid, name, email, birthDate } = profileData;

  let age = 0;
  if (birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    age = today.getFullYear() - birthDateObj.getFullYear();
    if (isNaN(age)) {
      age = 0;
    }
  }

  const newProfile = new Profile({
    uid,
    name,
    age,
    email,
    birthDate: birthDate ? new Date(birthDate) : null,
  });

  try {
    const profile = await newProfile.save();
    console.log("Profile created in the database:", profile);
    return profile;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
};
 