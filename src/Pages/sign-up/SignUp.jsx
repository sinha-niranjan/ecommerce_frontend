import React, { useState } from "react";
import "./SignUp.scss";
import logo from "../../assets/images/logo.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiArrowRightBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import avatarImage from "../../assets/images/logo/avatar.png";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [date, setDate] = useState();

  const navigate = useNavigate();

  return (
    <div className="signUp-main-box">
      <div className="signUp-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="signUp-inner-box">
      <h2>Sign up</h2>
        <img
          src={avatar ? URL.createObjectURL(avatar) : avatarImage}
          alt="avatar-image"
        />
        
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
          <div className="input-box-file">
            <p>Avatar</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
          <div className="input-box-dob">
            <p>Date of birth</p>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="signUp-btn">
            <p>SIGN IN</p>
            <PiArrowRightBold />
          </div>
        </form>
      </div>

      <div className="signUp-remark">
        <span>
          I have an account ?{" "}
          <strong onClick={() => navigate("/auth/sign-in")}>Sign in </strong>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
