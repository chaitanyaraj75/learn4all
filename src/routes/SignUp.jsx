import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import  { useState } from "react";

function SignupForm() {
  return (
    <div className="form-box">
      <h2>Create an Account</h2>
      <p>Free learning resources for all classes</p>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <p>Already have an account? <a href="/login">Login</a></p>

      <button className="primary-btn">Sign Up</button>

      <div className="divider">OR</div>

      <button className="google-btn">
        <img
          src="../assets/react.svg"
          alt="Google"
          style={{ width: "20px", marginRight: "8px" }}
        />
        Login with Google+
      </button>
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
        <h1>Register Page</h1>
        <p>Please enter your credentials to sign up.</p>
        <SignupForm />
      </div>

      <Footer />
    </>
  );
}

export default SignUp;
