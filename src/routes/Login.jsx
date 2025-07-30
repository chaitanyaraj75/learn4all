import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import googleLogo from "../assets/google.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

// ✅ LoginForm Component
function LoginForm() {
  const navigate = useNavigate();

  // ✅ Google Login Handler Function
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Logged in with Google:", user);
      navigate("/"); // redirect on success
    } catch (error) {
      console.error("❌ Google Login Error:", error);
    }
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <h2 className="form-title">Welcome Back!</h2>
        <p className="form-subtitle">Login to access your courses</p>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <button className="primary-btn">Login</button>

        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} className="link-highlight">
            Sign up Now
          </span>
        </p>

        <div className="divider">OR</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src={googleLogo}
            alt="Google"
            style={{ width: "20px", marginRight: "8px" }}
          />
          Login with Google
        </button>
      </div>
    </div>
  );
}

// ✅ Login Page Component
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
