import React from "react";

import "./Dashboard.scss";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  useAllUsersMutation,
  useLogoutMutation,
} from "../../../redux/api/userAPI";
import { userdata } from "../../../redux/reducer/userReducer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate("/");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const [allUsers] = useAllUsersMutation();
  const [logout] = useLogoutMutation();
  const accessToken = localStorage.getItem("AccessToken");

  const allUserHandler = async () => {
    try {
      const res = await allUsers(accessToken);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = async () => {
    try {
      localStorage.setItem("AccessToken", "");
      localStorage.setItem("RefreshToken", "");
      await logout(accessToken);

      dispatch(userdata(null));
      navigate("/");
    } catch (error) {
      console.log(error);
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
            <h3>{user?.email}</h3>
          </div>
        </div>

        <div className="options">
          <div className="option">
            <p onClick={allUserHandler}>All Users</p>
          </div>
          <div className="option">
            <p>All Orders</p>
          </div>{" "}
          <div className="option">
            <p>All Products</p>
          </div>{" "}
          <div className="option">
            <p>Create Product</p>
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

export default Dashboard;
