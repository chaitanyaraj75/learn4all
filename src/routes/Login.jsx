import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import googleLogo from "/google-logo.png"; // ✅ Replace with correct path
// import loginImg from "../assets/login-illustration.png"; // ✅ Add your own login illustration
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function LoginForm({ setIsLogin }) {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-md p-8 bg-white dark:bg-[#1e1e1e] rounded-xl shadow-md text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Welcome Back!</h2>
      <p className="text-gray-500 dark:text-gray-300 mb-6">Login to access your courses</p>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full mb-4 px-4 py-2 border dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2c2c2c] dark:text-white"
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full mb-4 px-4 py-2 border dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#2c2c2c] dark:text-white"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
        Login
      </button>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <span
          onClick={() =>{
             setIsLogin(false)
             navigate("/signup");
            }}
          className="text-orange-500 font-semibold cursor-pointer"
        >
          Sign up Now
        </span>
      </p>

      <div className="my-4 text-gray-400">OR</div>

      {/* <button className="flex items-center justify-center w-full border dark:border-gray-500 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"> */}
      <button className="google-btn">
        <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
        Login with Google
      </button>
    </div>
  );
}

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isDark, setIsDark] = useState(false);
  
  // const toggleDarkMode = (dark) => {
  //   setIsDark(dark);
  // };

  return (
    <>
      <Helmet>
        <title>Login | Learn4All</title>
      </Helmet>

      <Navbar 
      heading="login"
      darkmode={setIsDark}
      />

      <div className={`min-h-screen flex items-center justify-center px-4 ${isDark ? "bg-[#121212]" : "bg-gray-100"}`}>
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#1c1c1c] shadow-xl rounded-lg overflow-hidden max-w-5xl w-full">
          {/* Left Image */}
          <div className="md:w-1/2 hidden md:flex items-center justify-center bg-gray-200 dark:bg-[#2a2a2a] p-8">
            <img
              src="/png"
              alt="Login Visual"
              className="w-full max-h-[400px] object-contain"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <p>Sign up form here</p>}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
