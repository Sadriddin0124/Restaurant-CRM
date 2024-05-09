import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Logo from "../../../assets/logo.png"
const Register = ({switchAuth, setSwitchAuth}) => {
    const [type, setType] = useState(true)
  return (
    <div className={switchAuth ? "login" : "none"}>
      <div className="auth__right-top">
      <div className="auth__logo">
          <img src={Logo} alt="" />
          </div>
        <p className="auth__right-title">Welcome to our Restaurant..!</p>
        <div className="auth__right-nav">
          <button className="auth__right-link" onClick={()=>setSwitchAuth(false)}>Login</button>
          <button className="auth__right-active" onClick={()=>setSwitchAuth(true)}>Register</button>
        </div>
      </div>
      <form className="form">
        <label className="form__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
        <div className="form__input">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" placeholder="Enter your Email Address"/>
        </div>
        <div className="form__input">
            <label htmlFor="company">Company name</label>
            <input type="text" id="company" placeholder="Enter your Company name"/>
        </div>
        <div className="form__input">
            <IoEyeOff className={ type ? "auth__eye" : "none"} onClick={()=>setType(prev=> !prev)}/>
            <IoEye className={ type ? "none" : "auth__eye"} onClick={()=>setType(prev=> !prev)}/>
            <label htmlFor="password">Password</label>
            <input type={type ? "password" : "text"} id="password" placeholder="Enter your Password"/>
        </div>
        <button className="auth__btn">Register</button>
      </form>
    </div>
  )
}

export default Register
