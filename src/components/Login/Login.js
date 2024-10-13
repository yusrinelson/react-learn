import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";


export default function Login({setUser}) {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({
        name: "",
        email: "",
        password: "",
    })


    function handleChange(e) {
        const {name, value} = e.target;
        setFormInfo((prevState) => {
            return {
                ...prevState, //copies previous state
                [name]: value //sets new value of the name
            }
        })
    }

    function submit(e) {
      e.preventDefault();
        setUser(formInfo.name.trim()); //store user info in the state
      navigate(`/user/${formInfo.name.trim()}`); // trim so it goes to string
    }
  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={submit}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required onChange={handleChange} />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
