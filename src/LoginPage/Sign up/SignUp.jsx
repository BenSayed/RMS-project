import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("/api/User/Register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      console.log("Success:", response.data);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create account.");
    }
  };

  return (
    <div>
      <section className="SignUpPage">
        <div className="containerSignUp">
          <div className="form-sectionSignUp">
            <h1 style={{ fontFamily: "'Cormorant Upright'" }}>
              Create an Account
            </h1>
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  type="text"
                  required
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  type="text"
                  required
                />
              </div>
              <div className="full-width">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <div className="full-width password-group">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  required
                />
                <img
                  alt="Show Password"
                  src="src/LoginPage/Sign up/mdi_eye-outline (1).svg"
                />
              </div>
              <div className="full-width password-group">
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  type="password"
                  required
                />
                <img
                  alt="Show Password"
                  src="src/LoginPage/Sign up/mdi_eye-outline (2).svg"
                />
              </div>
              <div className="checkbox-group">
                <input
                  id="terms"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  type="checkbox"
                  required
                />
                <label htmlFor="terms">
                  You agree to our friendly privacy policy
                </label>
              </div>
              <button className="submit-btn" type="submit">
                Create an account
              </button>
            </form>
          </div>
          <div className="image-section3" />
        </div>
      </section>
    </div>
  );
};

export default SignUp;
