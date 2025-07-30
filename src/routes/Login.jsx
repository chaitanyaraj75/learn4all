import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple dummy login handler (you can add form validation later)
    console.log("User logged in");
    navigate("/");
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <h2 className="form-title">Welcome Back!</h2>
        <p className="form-subtitle">Login to access your courses</p>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <button className="primary-btn" onClick={handleLogin}>Login</button>

        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} className="link-highlight">
            Sign up Now
          </span>
        </p>

        {/* Removed Google login section */}
      </div>
    </div>
  );
}

function Login() {
  return (
    <>
      <Navbar />
      <div className="auth-container">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}

export default Login;
