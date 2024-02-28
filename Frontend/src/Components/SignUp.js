import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials; //destructuring
    //API call
    const url = `https://mern-notesify-website.onrender.com/api/auth/createuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(JSON.stringify({ name, email, password }), json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken); //storing token in localstorage (note: in backend also token sending by json should be in name authtoken)

      navigate("/"); //recirecting using useNavigate
    }
  };

  const onChange = (e) => {
    //using spread operator(...), all properties of note object stays, but if extra props specified then add them or overwrite them
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); //will update the credentials
  };

  return (
    <div className="top-container">
      <div
        className="container"
        style={{ marginTop: "40px", width: "600px", marginLeft: "468px" }}
      >
        <div className="header">
          <div className="text">SignUp</div>
          <div className="underline"></div>
        </div>
        <div className="inputs" style={{ marginTop: "33px" }}>
          <div className="input">
            <img src={user_icon} alt="pass_icon" />
            <input
              name="name"
              type="name"
              onChange={onChange}
              placeholder="Name"
            />
          </div>
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
        <div
          className="submit-container"
          style={{ marginTop: "33px", gap: "20px" }}
        >
          <button className="submit" onClick={handleSubmit}>
            SignUp
          </button>
          <div className="submitBelow" style={{ width: "250px" }}>
            Already have an Account?{" "}
            <span
              id="submit-button"
              onClick={() => {
                navigate("/login");
              }}
            >
              <u>Login</u>
            </span>
            Here!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
