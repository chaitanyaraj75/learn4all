import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import googleLogo from "/google-logo.png"; // ✅ Ensure path is correct
import "./Signup.css";
import { useNavigate } from "react-router-dom";

// ✅ Signup Form Component
function SignupForm() {
  const navigate = useNavigate();

  // ✅ Dummy Google Signup Handler
  const handleGoogleSignup = () => {
    alert("Google Sign up is currently disabled.");
    // navigate("/"); // You can still redirect if needed
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <h2 className="form-title">Create an Account</h2>
        <p className="form-subtitle">Free learning resources for all classes</p>

        <input type="text" name="fullName" placeholder="Full Name" className="form-input" />
        <input type="email" name="email" placeholder="Email" className="form-input" />
        <input type="password" name="password" placeholder="Password" className="form-input" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input" />

        <button type="submit" className="primary-btn">Sign Up</button>

        <p className="signup-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="link-highlight">
            Login
          </span>
        </p>

        <div className="divider">OR</div>

        <button className="google-btn" onClick={handleGoogleSignup}>
          <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

// ✅ Main SignUp Page Component
function SignUp() {
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode(dark) {
    setIsDark(dark);
    document.body.style.backgroundColor = !isDark ? "#121212" : "#f0f0f0";
  }

  return (
    <>
      <Helmet>
        <title>Sign Up | Learn4All</title>
      </Helmet>

      <Navbar 
        heading="signup"
        darkmode={toggleDarkMode}
      />
      <div className="auth-container">
        <SignupForm />
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
