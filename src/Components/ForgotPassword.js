import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
      e.preventDefault();
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


  return (
    <div className="main">
      <div className="Login-Main">
        <form onSubmit={validateEmail}>
          <h1>Forgot Password</h1>

          <input
            type="email"
            id="email-id"
            placeholder="Enter Your E mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}

          <input
            type="submit"
            id="login-btn"
            value="Submit"
            style={{marginTop: "1.5rem"}}
          />
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
