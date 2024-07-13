// Signin.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import GoogleLoginButton from "./GoogleLoginButton";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      Cookies.set("authToken", token, { expires: 1 }); // Store token in cookies for 7 days
      navigate("/"); // Redirect to dashboard
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen px-4 overflow-hidden"
      style={{ backgroundColor: "#F2F1EB" }}
    >
      <div
        className="mb-6 text-3xl font-bold text-center"
        style={{ color: "#88AB8E" }}
      >
        Smart Finance
      </div>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div
          className="mb-6 text-2xl font-bold text-center"
          style={{ color: "#88AB8E" }}
        >
          Login
        </div>
        <form className="mt-4" onSubmit={handleLogin}>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-[#88AB8E] focus:ring focus:ring-[#AFC8AD] focus:ring-opacity-50 text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mt-4 rounded-lg border-gray-300 focus:border-[#88AB8E] focus:ring focus:ring-[#AFC8AD] focus:ring-opacity-50 text-lg"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full"
              style={{
                backgroundColor: "#AFC8AD",
                color: "white",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                fontSize: "1.125rem",
                textAlign: "center",
              }}
            >
              Login
            </button>
            <div className="text-center text-gray-500 mb-4 pt-4">
              Don't have an account?{" "}
              <a href="/register" className="text-indigo-500">
                Register
              </a>
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

export default Signin;
