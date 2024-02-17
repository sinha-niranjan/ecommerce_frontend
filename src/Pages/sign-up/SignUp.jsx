import React, { useState } from "react";
import "./SignUp.scss";
import logo from "../../assets/images/logo.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiArrowRightBold } from "react-icons/pi";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  return (
    <div className="signUp-main-box">
      <div className="signUp-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="signUp-inner-box">
        <p>welcome back !!!</p>
        <h2>Sign up</h2>
        <form action="">
          <div className="input-box-name">
            <p>Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box-email">
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box-password">
            <div className="label">
              <p>Password</p>
              <p>Forgot Password ?</p>
            </div>
            <div className="input">
              <input
                type={open ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {open ? (
                <div
                  className="password-icon"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <MdOutlineRemoveRedEye />
                </div>
              ) : (
                <div
                  className="password-icon"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <FaRegEyeSlash />
                </div>
              )}
            </div>
          </div>
          <div className="signUp-btn">
            <p>SIGN IN</p>
            <PiArrowRightBold />
          </div>
        </form>
      </div>

      <div className="signUp-remark">
        <span>
          I have an account ? <strong>Sign in </strong>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
