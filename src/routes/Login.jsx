 import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import googleLogo from "/google-logo.png"; 

function LoginForm({ setIsLogin }) {
  return (
    <div className="form-box">
      <h2>Welcome Back!</h2>
      <p>Login to access your courses</p>

      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />

      <button className="primary-btn">Login</button>

      <p className="signup-link">
        Don't have an account?{" "}
        <span
          onClick={() => setIsLogin(false)}
          style={{ color: "orange", fontWeight: "bold", cursor: "pointer" }}
        >
          Sign up Now
        </span>
      </p>

      <div className="divider">OR</div>

      <button className="google-btn">
        <img
          src={googleLogo}
          alt="Google"
          style={{ width: "20px", marginRight: "8px" }}
        />
        Login with Google
      </button>
    </div>
  );
}

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <h1>Login Page</h1>
        <p>Please enter your credentials to log in.</p>
        <LoginForm setIsLogin={setIsLogin} />
      </div>
      <Footer />
    </>
  );
}

export default Login;
