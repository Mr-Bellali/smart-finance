import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthDate: {
    type: Date,
    default: null,
  },
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
