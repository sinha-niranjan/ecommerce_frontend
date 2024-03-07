import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/userAPI";
import { userdata } from "../../redux/reducer/userReducer";
import "./Profile.scss";

const Profile = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    // const cookie = document.cookie?.split("Refreshtoken=");

    // const accessToken = cookie[0]?.split("=")[1]?.replace(";", "");
    // const refreshToken = cookie[1];

    const accessToken = localStorage.getItem("AccessToken");
    const refreshToken = localStorage.getItem("RefreshToken");

    // console.log(accessToken, refreshToken);
    localStorage.setItem("AccessToken", null);
    localStorage.setItem("RefreshToken", null);
    const res = await logout(accessToken);
    // document.cookie = "Accesstoken=; Max-Age=0;secure";
    // document.cookie = "Refreshtoken=; Max-Age=0;secure";

    if (res?.data?.success) {
      dispatch(userdata(null));
      navigate("/");
    }
  };
  return (
    <div className="profile-page">
      <div className="rightSide">
        <div className="user-profile">
          <div className="img">
            <IoPersonOutline />
          </div>
          <div className="details">
            <p>Welcome back</p>
            <h3>niranjankumaraina@gmail.com</h3>
          </div>
        </div>

        <div className="options">
          <div className="option">
            <p>Dashboard</p>
          </div>
          <div className="option">
            <p>Orders</p>
          </div>{" "}
          <div className="option">
            <p>Whislist</p>
          </div>{" "}
          <div className="option">
            <p>Addresses</p>
          </div>{" "}
          <div className="option">
            <p>Account Details</p>
          </div>{" "}
          <div className="option">
            <p onClick={logoutHandler}>Logout</p>
          </div>
        </div>
      </div>
      <div className="leftSide"></div>
    </div>
  );
};

export default Profile;
