import { Helmet } from "react-helmet";
 import React from "react";
 import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import React, { useState } from "react";

function SignupForm() {
  return (
    <div className="form-box">
      <h2>Create an Account</h2>
      <p>Free learning resources for all classes</p>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Confirm Password" />
      <p>Already have an account?</p>
      <button className="primary-btn">Sign Up</button>
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

function SignUp() {
  return (
    <div>
      <h1>Register Page</h1>
      <p>Please enter your credentials to log in.</p>
      <SignupForm />
    </div>
  );
}

export default SignUp;