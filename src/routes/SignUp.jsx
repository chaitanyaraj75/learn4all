import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import googleLogo from "../assets/google.png";
import './Signup.css';
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function SignupForm() {
  const navigate = useNavigate();

  // 🔁 Google Sign Up Handler Function
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Signed up with Google:", user);
      navigate("/");
    } catch (error) {
      console.error("❌ Google Signup Error:", error);
    }
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <h2 className="form-title">Create an Account</h2>
        <p className="form-subtitle">Free learning resources for all classes</p>

        <input type="text" name="fullName" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" />

        <button type="submit" className="primary-btn">Sign Up</button>

        <p className="signup-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="link-highlight">
            Login
          </span>
        </p>

        <div className="divider">OR</div>

        <button className="google-btn" onClick={handleGoogleSignup}>
          <img
            src={googleLogo}
            alt="Google"
            style={{ width: "20px", marginRight: "8px" }}
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

function SignUp() {
  return (
    <>
      <Helmet>
        <title>Sign Up | Learn4All</title>
      </Helmet>

      <Navbar />
      <div className="auth-container">
        <SignupForm />
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
