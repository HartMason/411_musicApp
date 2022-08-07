import React from "react";
import { useState } from "react";
import "./Login.css";

export const Signup = ({ loginHandler }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    console.log(e.target);
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    loginHandler(true);
  };

  return (
    <div className="login">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signup;
