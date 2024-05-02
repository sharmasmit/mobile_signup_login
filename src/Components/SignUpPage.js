import React, { useState } from "react";
import { Link } from "react-router-dom";
import eye from "../images/eye.svg";
import eyeCrossed from "../images/eye-crossed.svg";

function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name] : value })
  }

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    const at = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validationErrors = {}
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First Name is Required"
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last Name is Required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is Required";
    } else if (!at.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is Required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password is to short";
    }

    if (formData.repeatPassword !== formData.password) {
      validationErrors.repeatPassword = "Password not Matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully")
    }
  }

  return (
    <>
      <div className="main">
        <div className="Login-Main">
          <form onSubmit={handleSubmit}>
            <h1>SignUp</h1>

            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}

            <input
              type="email"
              name="email"
              placeholder="Enter Your E mail"
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}

            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <button type="button">
                <img src={eye} alt="Show Password" className="eye" />
                <img
                  src={eyeCrossed}
                  alt="Hide Password"
                  className="eye-crossed"
                />
              </button>
            </div>
            {errors.password && <p>{errors.password}</p>}

            <div className="input-container">
              <input
                type="password"
                name="repeatPassword"
                placeholder="Repeat Password"
                onChange={handleChange}
              />
              <button type="button">
                <img src={eye} alt="Show Password" className="eye" />
                <img
                  src={eyeCrossed}
                  alt="Hide Password"
                  className="eye-crossed"
                />
              </button>
            </div>
            {errors.repeatPassword && <p>{errors.repeatPassword}</p>}

            <p style={{ marginTop: "0.6rem" }}>
              By Signing up you agree to our
              <Link to="#" id="terms&Conditions" style={{ fontWeight: "bold" }}>
                Privacy Policy and Terms.
              </Link>
            </p>

            <input
              type="submit"
              id="login-btn"
              value="Continue"
              style={{ marginTop: "0.6rem" }}
            />

            <p style={{ color: "grey", marginTop: "0.6rem" }}>
              Already |have an account?{" "}
              <Link to="/LoginPage" style={{ fontWeight: "bold" }}>
                Sign In
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUpPage;
