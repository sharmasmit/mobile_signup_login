import React, { useState } from "react";
import { Link } from "react-router-dom";
import eye from "../images/eye.svg";
import eyeCrossed from "../images/eye-crossed.svg";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeCrossed);
  const checkbox = document.getElementById("check-Box");
  const submitBTN = document.querySelector("#login-btn");

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeCrossed);
      setType("password");
    }
  };

  const hendleBtn = () => {
    if (checkbox.checked) {
      submitBTN.disabled = false;
    } else {
      submitBTN.disabled = true;
    }
  };

  return (
    <>
      <div className="main">
        <div className="Login-Main">
          <form>
            <h1>Login</h1>

            <input type="email" placeholder="Enter Your E mail" />

            <div className="input-container">
              <input
                type={type}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
              <button type="submit" onClick={handleToggle}>
                <img src={icon} alt="Eye" className="eye" />
              </button>
            </div>
            <Link
              to="#"
              id="forgot-link"
              style={{ float: "right", fontWeight: "bold" }}
            >
              Forgot Password
            </Link>
            <br />

            <input
              type="checkbox"
              for="terms"
              id="check-Box"
              onChange={hendleBtn}
              style={{ marginTop: "2.4rem" }}
            />
            <label name="terms" id="terms">
              I Agree To <Link to="#">Terms of Use</Link>
            </label>
            <br />

            <input
              type="submit"
              id="login-btn"
              value="Log in"
              disabled
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
