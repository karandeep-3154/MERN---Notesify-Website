import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorReceived, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://mern-notesify-website.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      setError("");
      navigate("/");
    } else {
      setError(json.error);
      // console.log("hi", errorReceived);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  return (
    <div className="top-container">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="user_icon" />
            <input
              name="email"
              type="email"
              onChange={onChange}
              placeholder="Email Id"
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="pass_icon" />
            <input
              name="password"
              type="password"
              onChange={onChange}
              placeholder="Password"
            />
          </div>
        </div>
        {
          errorReceived ? (
        <div className = "ErrorContainer">{errorReceived}</div>

          ):(<></>)
        }
        <div className="submit-container">
          <button className="submit" onClick={handleSubmit}>
            Login
          </button>
          <div className="submitBelow">
            Don't have an Account?{" "}
            <span
              id="submit-button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              {" "}
              <u>Sign Up</u>
            </span>
            Here!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
