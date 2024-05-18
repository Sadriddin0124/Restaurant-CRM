import React, { useState } from "react";
import AuthImage from "../../assets/login.png";
import "./Auth.scss";
import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Auth = () => {
    const [switchAuth, setSwitchAuth] = useState(false)
    const notify = (text) => {
      toast.success(text)
    }
  return (
    <div className="auth">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <div className="auth__image">
        <img src={AuthImage} alt="auth" onClick={notify}/>
      </div>
      <div className="auth__right">
        <Login setSwitchAuth={setSwitchAuth} switchAuth={switchAuth} notify={notify}/>
        <Register switchAuth={switchAuth} setSwitchAuth={setSwitchAuth}/>
      </div>
    </div>
  );
};

export default Auth;
