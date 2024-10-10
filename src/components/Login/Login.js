import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate(); 

    function submit(e) {
      e.preventDefault();

      navigate("/home"); 
    }
  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={submit}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
