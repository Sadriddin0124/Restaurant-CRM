import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Logo from "../../../assets/logo.png"
const Login = ({switchAuth, setSwitchAuth}) => {
    const [type, setType] = useState(true)
    const navigate = useNavigate()
    const Login = () => {
      navigate("/home")
    }
  return (
    <div className={switchAuth ? "none" : "login"}>
      <div className="auth__right-top">
        <div className="auth__logo">
          <img src={Logo} alt="" />
          </div>
        <p className="auth__right-title">Welcome to our Restaurant..!</p>
        <div className="auth__right-nav">
          <button className="auth__right-active" onClick={()=>setSwitchAuth(false)}>Login</button>
          <button className="auth__right-link" onClick={()=>setSwitchAuth(true)}>Register</button>
        </div>
      </div>
      <form className="form">
        <label className="form__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
        <div className="form__input">
            <label htmlFor="username">User name</label>
            <input type="text" id="username" placeholder="Enter your User name"/>
        </div>
        <div className="form__input">
            <IoEyeOff className={ type ? "auth__eye" : "none"} onClick={()=>setType(prev=> !prev)}/>
            <IoEye className={ type ? "none" : "auth__eye"} onClick={()=>setType(prev=> !prev)}/>
            <label htmlFor="password">Password</label>
            <input type={type ? "password" : "text"} id="password" placeholder="Enter your Password"/>
        </div>
        <div className="login__bottom">
            <div className="login__remember">
                <input type="checkbox" id="remember"/>
                <label htmlFor="remember">Remember me</label>
            </div>
            <Link className="login__forgot">Forgot Password ?</Link>
        </div>
        <button className="auth__btn" onClick={Login}>Login</button>
      </form>
    </div>
  );
};

export default Login;
