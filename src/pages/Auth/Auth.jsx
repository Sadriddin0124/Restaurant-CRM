import React, { useState } from "react";
import AuthImage from "../../assets/login.png";
import "./Auth.scss";
import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";
const Auth = () => {
    const [switchAuth, setSwitchAuth] = useState(false)
  return (
    <div className="auth">
      <div className="auth__image">
        <img src={AuthImage} alt="auth" />
      </div>
      <div className="auth__right">
        <Login setSwitchAuth={setSwitchAuth} switchAuth={switchAuth}/>
        <Register switchAuth={switchAuth} setSwitchAuth={setSwitchAuth}/>
      </div>
    </div>
  );
};

export default Auth;
