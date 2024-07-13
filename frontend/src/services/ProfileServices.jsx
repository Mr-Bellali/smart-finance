import api from "../api/api";

const createProfile = async (profileData) => {
  const response = await api.post("/profile", profileData);
  return response.data;
};

export { createProfile };


