import { useState } from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import { createUserWithEmailAndPassword, auth } from "../../config/firebase-config";
import { updateProfile } from "firebase/auth";
import { createProfile } from "../../services/ProfileServices";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await updateProfile(user, { displayName: name });

      const profileData = {
        pid: user.uid,
        name: name,
        email: user.email,
      };

      const createdProfile = await createProfile(profileData);
      console.log("Profile created successfully:", createdProfile);

      console.log("Signed up successfully!", user);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 overflow-hidden" style={{ backgroundColor: "#F2F1EB" }}>
      <div className="mb-6 text-3xl font-bold text-center" style={{ color: "#88AB8E" }}>
        Smart Finance
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6 text-2xl font-bold text-center text-[#88AB8E]">
          Register
        </div>
        <form className="mt-4" onSubmit={handleSignup}>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-[#88AB8E] focus:ring focus:ring-[#AFC8AD] focus:ring-opacity-50 text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-4 rounded-lg border-gray-300 focus:border-[#88AB8E] focus:ring focus:ring-[#AFC8AD] focus:ring-opacity-50 text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mt-4 rounded-lg border-gray-300 focus:border-[#88AB8E] focus:ring focus:ring-[#AFC8AD] focus:ring-opacity-50 text-lg"
            />
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full bg-[#88AB8E] text-white px-4 py-3 rounded-lg focus:outline-none text-lg">
              Register
            </button>
            <div className="text-center text-gray-500 mb-4 pt-4">
              Already have an account? <a href="/login" className="text-indigo-500">Login</a>
            </div>
            <div className="flex justify-center">
              <GoogleLoginButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
