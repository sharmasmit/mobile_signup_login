import React, { useState } from "react";
import { Link } from "react-router-dom";
import eye from "../images/eye.svg";
import eyeCrossed from "../images/eye-crossed.svg";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = () => {
    const at = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
      setEmailError("Email is Required");
      return false;
    } else if (!email.match(at)) {
      setEmailError("Enter Valid Email");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (password === "") {
      setPasswordError("Password is Required");
      return false;
    } else if (password.length <= 5) {
      setPasswordError("Password too Short!");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail() && validatePassword() && isChecked) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed!");
    }
  };

  const eyeShow = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="main">
      <div className="Login-Main">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <input
            type="email"
            id="email-id"
            placeholder="Enter Your E mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p>{emailError}</p>}

          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={eyeShow}>
              {showPassword ? (
                <img src={eye} alt="Show Password" className="eye" />
              ) : (
                <img
                  src={eyeCrossed}
                  alt="Hide Password"
                  className="eye-crossed"
                />
              )}
            </button>
            {passwordError && <p>{passwordError}</p>}
          </div>
          <Link
            to="/ForgotPassword"
            id="forgot-link"
            style={{ float: "right", fontWeight: "bold" }}
          >
            Forgot Password
          </Link>
          <br />

          <input
            type="checkbox"
            id="check-Box"
            onChange={handleCheckboxChange}
            style={{ marginTop: "2.4rem" }}
          />
          <label htmlFor="check-Box" id="terms">
            I Agree To <Link to="#">Terms of Use</Link>
          </label>
          <br />

          <input
            type="submit"
            id="login-btn"
            value="Log in"
            disabled={!isChecked}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
