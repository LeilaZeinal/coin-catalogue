import React  from "react";
import "./AdminPanelLogin.css";
export default function AdminPanelLogin() {
  
  return (
    <>
      <h1 className="home-page-header">Admin Panel</h1>
      <form className="login-form" action="submit" >
        <div className="login-input">
          <label htmlFor="login-input" className="label">
            Login
          </label>
          <input
            type="text"
            name="login"
            id="login-input"
            placeholder="Username"
        
          />
        </div>
        <div className="password">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            className="password-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
         
          />
        </div>
        <button className="sign-in-button">Sign in</button>
       
      </form>
    </>
  );
}
