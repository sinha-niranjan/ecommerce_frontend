import React, { useState } from "react";
import "./Login.scss";
import logo from "../../assets/images/logo.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiArrowRightBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userdata } from "../../redux/reducer/userReducer";
import { useLoginMutation } from "../../redux/api/userAPI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      const data = res?.data?.data;

      localStorage.setItem("AccessToken", data.accessToken);
      localStorage.setItem("RefreshToken", data.refreshToken);

      // document.cookie = `Accesstoken=${data.accessToken}`;
      // document.cookie = `Refreshtoken=${data.refreshToken}`;

      if (res?.data?.success) {
        dispatch(userdata(data?.user));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-main-box">
      <div className="login-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>

      <div className="login-inner-box">
        <p>welcome back !!!</p>
        <h2>Sign in</h2>
        <form action="">
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
          <div className="login-btn" onClick={loginHandler}>
            <p>SIGN IN</p>
            <PiArrowRightBold />
          </div>
        </form>
      </div>

      <div className="login-remark">
        <span>
          I don't have an account ?{" "}
          <strong onClick={() => navigate("/auth/sign-up")}>Sign up </strong>
        </span>
      </div>
    </div>
  );
};

export default Login;
